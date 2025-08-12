# Task 6 — Host a Static Website with GitHub Pages 

**DevOps Internship Project**  
**Objective:** Deploy a visually appealing, fully responsive static website with particle effects and theme toggle, using GitHub Pages.

---

## 📌 Technologies Used
- **HTML5** — Structure and semantic content
- **CSS3** — Glassmorphism UI, responsive design, animations
- **JavaScript (ES6)** — Particle effect and theme toggle logic
- **Git & GitHub** — Version control and repository management
- **GitHub Pages** — Free static site hosting

---

## 🎯 Project Overview
This project demonstrates how to:
1. Create a **premium-looking static website**.
2. Implement **glassmorphism effects** and **theme toggle** (Sun/Cloud ☀️ & Moon/Star 🌙).
3. Add **animated particle backgrounds** that sync with the active theme.
4. Make the website **responsive** for all devices.
5. Deploy it live using **GitHub Pages** — completely free.

---

## 🖥 Features
- 🌈 **Animated gradient background**
- ✨ **Particle network effect** with dynamic colors for light/dark mode
- 🌗 **Custom theme toggle** (Sun/Cloud ☀️ & Moon/Star 🌙 icons)
- 💎 **Glassmorphism UI** for modern look
- 📱 **Fully responsive** design for mobiles, tablets, and desktops
- 📢 **Acknowledgment section** highlighting Elevate Labs’ contribution

---

## 📂 Project Structure
```
.
├── index.html   # Main HTML file
├── styles.css   # External CSS for UI styling
├── script.js    # External JavaScript for animations and theme toggle
└── README.md    # Project documentation
```

---

## 🚀 Deployment Steps

### **1. Prepare Local Files**
- Create a project folder.
- Add the following files:  
  - `index.html`  
  - `styles.css`  
  - `script.js`

### **2. Initialize Git Repository**
```bash
git init
git add .
git commit -m "Task 6: Premium Responsive Static Website"
```

### **3. Create GitHub Repository**
- Go to GitHub → **New Repository**.
- Select **Public**.
- Do NOT add README (you already have one).

### **4. Push Local Project to GitHub**
```bash
git branch -M main
git remote add origin https://github.com/<username>/<repository-name>.git
git push -u origin main
```

### **5. Enable GitHub Pages**
- Go to **Settings → Pages**.
- Set:
  - **Source** → Branch: `main`
  - **Folder** → `/ (root)`
- Save.

### **6. Access Live Site**
- Wait 1–2 minutes for GitHub to deploy.
- Your live site will be available at:  
  ```
  https://<username>.github.io/<repository-name>/
  ```

---

## 📸 Screenshots

| Screenshot | Description |
|------------|-------------|
| ![Repo Root](screenshots/1%20-%20Repo-Root.png) | **Repository root view** showing files and structure |
| ![Pages Settings](screenshots/2%20-%20Pages-Setting.png) | **GitHub Pages settings** page configuration |
| ![Live Website Light Mode](screenshots/3%20-%20Light-Mode.jpeg) | **Website in Light Mode** with particles |
| ![Live Website Dark Mode](screenshots/4%20-%20Dark-Mode.jpeg) | **Website in Dark Mode** with particles |
| ![Responsive View](screenshots/5%20-%20Responsive-View.jpeg) | **Mobile/Tablet responsive layout** |

> 📌 Replace `assets/...` paths with your actual screenshot file paths in the repository.

---

## 💬 Interview Q&A

**1. What is GitHub Pages?**  
GitHub Pages is a **free static site hosting service** provided by GitHub that allows you to publish websites directly from your GitHub repository.

**2. Can you host dynamic apps here?**  
No, GitHub Pages only supports **static content** (HTML, CSS, JS). For dynamic apps, you need backend hosting.

**3. What are the limits of GitHub Pages?**  
- Static content only.  
- **Bandwidth limit:** ~100 GB per month.  
- **Storage limit:** 1 GB per repository.  
- No server-side execution.

**4. How do you update the website?**  
Push changes to the configured branch (usually `main`). GitHub Pages automatically redeploys.

**5. What happens when you delete the repo?**  
The live site will be removed and the URL will no longer be accessible.

**6. What is the default file that loads?**  
`index.html` is the default file that loads when someone visits your site.

**7. Can you use a custom domain?**  
Yes, you can link a custom domain via GitHub Pages settings and DNS configuration.

---

## 🌐 Live Demo
[Live Website](https://sohel9146.github.io/Task-6-Host-a-Static-Website-with-GitHub-Pages/)
