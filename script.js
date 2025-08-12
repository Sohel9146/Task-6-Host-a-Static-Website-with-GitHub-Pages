  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particlesArray = [];
  const numParticles = 60;
  const connectDist = 120;
  let particleColors = ["#00e5ff","#18ffff","#00ff9d","#00bcd4","#4caf50"];

  class Particle {
    constructor(x, y, size, sx, sy, color) {
      this.x = x; this.y = y; this.size = size;
      this.sx = sx; this.sy = sy; this.color = color;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 20; ctx.shadowColor = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.sx; this.y += this.sy;
      if (this.x > canvas.width || this.x < 0) this.sx *= -1;
      if (this.y > canvas.height || this.y < 0) this.sy *= -1;
      this.draw();
    }
  }

  function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numParticles; i++) {
      const size = Math.random()*3+2;
      const x = Math.random()*canvas.width;
      const y = Math.random()*canvas.height;
      const sx = (Math.random()-0.5)*1;
      const sy = (Math.random()-0.5)*1;
      const color = particleColors[Math.floor(Math.random()*particleColors.length)];
      particlesArray.push(new Particle(x,y,size,sx,sy,color));
    }
  }
  function connectParticles() {
    for (let a=0; a<particlesArray.length; a++) {
      for (let b=a; b<particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < connectDist) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(0,230,255,0.15)";
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p => p.update());
    connectParticles();
    requestAnimationFrame(animate);
  }
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    initParticles();
  });

  initParticles(); animate();

  const toggleBtn = document.getElementById("theme-toggle");
  const iconLight = document.getElementById("icon-light");
  const iconDark = document.getElementById("icon-dark");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const darkMode = document.body.classList.contains("dark");
    if (darkMode) {
      iconLight.style.display = "none"; iconDark.style.display = "block";
      particleColors = ["#ffffff","#cccccc","#aaaaaa"];
    } else {
      iconLight.style.display = "block"; iconDark.style.display = "none";
      particleColors = ["#00e5ff","#18ffff","#00ff9d","#00bcd4","#4caf50"];
    }
    initParticles();
  });