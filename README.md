# thisisnourel — Nour Elhouda's Portfolio ✨

Welcome to the source code of [thisisnourel.com](https://thisisnourel.com) — a minimalist, responsive, and intentional personal portfolio built using **Next.js 15**, **Tailwind CSS**, and **TypeScript**.  
It showcases my journey as a **UI/UX Designer** and **Frontend Developer**, with a focus on clean visuals, thoughtful storytelling, and performance.

---

## 🌐 Live Site

👉 [https://thisisnourel.com](https://thisisnourel.com)

---

## 🚀 Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) for subtle animations
- [next/image](https://nextjs.org/docs/pages/api-reference/components/image) with static fallback
- Deployed manually via FileZilla to a custom server

---

## 🎨 Features

- 🕋️ Custom Google Fonts: `Playfair Display` & `Plus Jakarta Sans`
- 📱 Fully responsive, mobile-first layout
- 💡 SEO-optimized meta tags
- 🎯 Scroll-triggered animations (timeline, skills, sections)
- 📩 Smooth contact CTA with email integration
- 🔝 Sticky header and animated scroll-to-top button
- 🌙 Soft minimalist design with personal flair

---

## 📁 Project Structure

```
thisisnourel/
├── public/
│   └── images/                # All project and UI images
├── src/
│   └── app/
│       ├── components/        # Reusable UI components (Hero, Skills, Projects, etc.)
│       ├── layout.tsx         # Global fonts, metadata, header/footer
│       └── page.tsx           # Homepage entry point
├── tailwind.config.ts         # Custom fonts and plugin config
├── next.config.ts             # Static export setup
└── README.md                  # You're here!
```

---

## 🧪 Getting Started Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/nourelhouda94/thisisnourel.git
cd thisisnourel
npm install
npm run dev
```

---

## 📦 Static Export & Deployment

This portfolio is statically exported for deployment to FTP servers (no SSR).

```bash
npm run build
```

This will automatically generate the `/out` folder thanks to:

```ts
// next.config.ts
export const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

Then you can upload the `/out` folder to your server via FileZilla or any FTP tool.

---

## 📸 Previews

| Hero Section              | Projects Grid             | Skills & Timeline         |
|---------------------------|----------------------------|----------------------------|
| ![](public/images/hero-preview.jpg) | ![](public/images/projects-preview.jpg) | ![](public/images/skills-preview.jpg) |

> (Replace these with real screenshots if desired)

---

## 😇 About Me

Hi, I’m **Nourelhouda**, a UI/UX Designer and Frontend Developer from Morocco, currently based in Germany 🇩🇪  
I build experiences that feel like home — intuitive, elegant, and purpose-driven.

📧 Reach me at [nour@webdezign.co.uk](mailto:nour@webdezign.co.uk)  
🔗 Follow me on [Instagram @thisisnourel](https://instagram.com/thisisnourel)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

_“Design isn't just how it looks — it's how it feels, moves, and connects.”_

