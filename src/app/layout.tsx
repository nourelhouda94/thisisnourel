import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata = {
  title: "thisisnourel – UI/UX Designer & Frontend Developer",
  description:
    "Nourelhouda is a UI/UX Designer and Frontend Developer crafting clean, scalable, and intentional interfaces. Let&rsquo;s build something great together.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>thisisnourel – UI/UX Designer & Frontend Developer</title>
        <meta name="description" content="Nourelhouda is a UI/UX Designer and Frontend Developer crafting clean, scalable, and intentional interfaces. Let’s build something intentional." />
        <meta name="keywords" content="UI UX Designer, Frontend Developer, React, Tailwind, Freelance, Portfolio, Web Design, Webdezign, Nourelhouda" />
        <meta name="author" content="Nourelhouda" />
        <meta property="og:title" content="thisisnourel – UI/UX Designer & Frontend Developer" />
        <meta property="og:description" content="Crafting interfaces that make sense and building them right." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://thisisnourel.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${playfair.variable} ${jakarta.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
