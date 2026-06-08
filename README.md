# 🏥 GS Clinic - Premium Healthcare Website

A modern, fully responsive, premium website for **GS Clinic**, Agra — featuring glassmorphism design, smooth animations, and an **AI Clinic Assistant chatbot**.

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-blue)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)

---

## ✨ Features

### 🎨 Design
- Premium medical theme with sky-blue & teal gradients
- Glassmorphism cards with backdrop blur
- Smooth scroll-reveal animations (IntersectionObserver)
- Animated hero section with floating elements & blobs
- Modern typography (Playfair Display + Poppins)
- Hover effects on every interactive element

### 📱 Responsive
- Mobile-first responsive design
- Hamburger mobile menu
- Optimized layouts for phone, tablet, and desktop

### 🤖 AI Clinic Assistant
- Rule-based chatbot that answers questions about:
  - ⏰ Clinic timings
  - 📍 Location & address
  - 🏥 Services offered
  - 📅 Appointments
  - 👨‍⚕️ Doctor info
  - 🚨 Emergency help
  - 💰 Fees & insurance
  - 🏠 Home visits
  - 🔬 Lab & diagnostics
- Quick-suggestion chips
- Typing animation for natural feel
- Auto-opens after 6 seconds (desktop)

### 🧩 Sections Included
1. Animated Hero
2. About Clinic
3. Doctor Profile
4. Services (8 cards)
5. Appointment Booking Form
6. Gallery (8 images)
7. Health Tips
8. Patient Reviews
9. FAQ Accordion
10. Google Map (Agra)
11. Contact Information
12. Footer with social links

### 🔘 Floating Features
- WhatsApp chat button (with pulse animation)
- Call Now button
- AI Chatbot toggle
- Back-to-top button
- Sticky navbar with scroll effect
- Loading animation

---

## 📁 File Structure

```
gs-clinic/
├── index.html       # Main HTML page (all sections)
├── style.css        # Complete stylesheet (responsive)
├── script.js        # JavaScript (menu, form, chatbot, animations)
└── README.md        # Project documentation
```

---

## 🚀 How to Run

### Option 1: Direct Open
1. Download or clone this repository
2. Double-click `index.html` → opens in your default browser

### Option 2: Live Server (Recommended)
```bash
# Using VS Code
# 1. Install "Live Server" extension
# 2. Right-click index.html → "Open with Live Server"

# Using Python
python -m http.server 8000
# Open http://localhost:8000

# Using Node.js (npx)
npx serve .
```

---

## 🛠 Customization Guide

### Change Clinic Details
Open `index.html` and edit:
- **Clinic name**: Search for `GS Clinic`
- **Phone**: Replace `+919876543210` and `+91 98765 43210`
- **Email**: Replace `contact@gsclinic.in`
- **Address**: Update the address in Contact & Footer sections
- **Map**: Change the Google Maps `iframe` URL

### Change Colors
Open `style.css` and edit CSS variables at the top:
```css
:root{
  --primary:#0891b2;       /* Main brand color */
  --accent:#14b8a6;        /* Accent color */
  --gradient:linear-gradient(135deg,#0891b2,#14b8a6);
}
```

### Update AI Chatbot Responses
Open `script.js` → find the `knowledge` array and edit/add new keyword–reply pairs:
```js
{
  keywords: ['your', 'keywords', 'here'],
  reply: "Your response here. HTML supported!"
}
```

### Change Images
Replace image URLs in `index.html` with your own clinic photos:
- Hero doctor image
- About clinic image
- Gallery images (8 total)

### Add Google Analytics
Paste your GA tracking script just before `</head>` in `index.html`.

---

## 🌐 Deploy on GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it (e.g., `gs-clinic`)
3. Click **Create repository**

### Step 2: Push Your Code
```bash
git init
git add .
git commit -m "Initial commit: GS Clinic website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gs-clinic.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Click **Pages** in the sidebar
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4: Access Your Website
Your site will be live at:
```
https://YOUR_USERNAME.github.io/gs-clinic/
```

⏱ Deployment usually takes 1–2 minutes.

### Optional: Custom Domain
1. In **Settings → Pages**, add your custom domain
2. Create a `CNAME` file in your repo containing your domain
3. Configure DNS A/CNAME records at your domain registrar

---

## 🧪 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Opera   | ✅ Latest |
| IE      | ❌ Not supported |

---

## 📝 License

This project is released under the **MIT License**. Feel free to use, modify, and distribute for personal or commercial use.

---

## 🤝 Credits

- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Images**: [Unsplash](https://unsplash.com)
- **Maps**: [Google Maps Embed](https://developers.google.com/maps)

---

## 📧 Contact

For queries or custom development:
- 📞 +91 98765 43210
- 📧 contact@gsclinic.in
- 📍 Agra, Uttar Pradesh, India

---

<p align="center">
  <b>Crafted with 💙 for healthier Agra</b><br>
  <small>© 2026 GS Clinic. All rights reserved.</small>
</p>
