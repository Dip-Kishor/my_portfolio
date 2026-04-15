import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Dip Kishor Regmi | Portfolio", // It is good practice to put your name here
//   description: "Professional Portfolio of Dip Kishor Regmi, Software Developer.",
//   icons: {
//     icon: "/icon.svg", // This points to public/icon.svg
//   },
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://www.dipkishor.com.np"),

  title: {
    default: "Dip Kishor Regmi | Full-Stack Software Developer",
    template: "%s | Dip Kishor Regmi",
  },
  description:
    "Full-Stack Software Developer in Kathmandu, Nepal. Specializing in .NET, React, and Next.js web applications.",

  verification: {
    google: "SblW_qA39Tz0eqgcPK5xw5KUMonDNqp05i8cw9CLqg4",
  },

  keywords: [
    "Dip Kishor Regmi",
    "Software Developer Nepal",
    "Full Stack Developer Kathmandu",
    "React Developer",
    ".NET Developer Nepal",
    "Next.js Developer",
  ],
  authors: [{ name: "Dip Kishor Regmi", url: "https://www.dipkishor.com.np" }],
  creator: "Dip Kishor Regmi",

  alternates: {
    canonical: "https://www.dipkishor.com.np",
  },

  openGraph: {
    type: "website",
    url: "https://www.dipkishor.com.np",
    title: "Dip Kishor Regmi | Full-Stack Software Developer",
    description:
      "Full-Stack Developer in Kathmandu, Nepal. Building modern web apps with .NET & React.",
    siteName: "Dip Kishor Regmi Portfolio",
    images: [
      {
        url: "/Images/MyImg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dip Kishor Regmi - Full-Stack Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dip Kishor Regmi | Full-Stack Software Developer",
    description:
      "Full-Stack Developer in Kathmandu, Nepal. Specializing in .NET, React & Next.js.",
    images: ["/Images/MyImg.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.svg",
  },
};
// Schema Markup (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dip Kishor Regmi",
  url: "https://www.dipkishor.com.np",
  jobTitle: "Full-Stack Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  sameAs: [
    "https://github.com/Dip-Kishor",
    "https://www.linkedin.com/in/dip-kishor-regmi-9b7a6631b/",
    "https://instagram.com/dipkishor_regmi",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="mt-40"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
