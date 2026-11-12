import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { BASE_URL, OG_IMAGE } from "@/lib/constants";
import LenisWrapper from "@/providers/lenis-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import FooterSection from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import StructuredData from "@/components/common/structured-data";
import Analytics from "@/components/common/analytics";
import ConsoleLog from "@/components/common/console-log";
import CustomCursor from "@/components/ui/custom-cursor";

const BRAND_NAME = "TIME KAMU";
const FOUNDER_NAME = "Indrajit Bhunia";
const CREATOR_NAME = "INDRA";

const SITE_DESCRIPTION =
  "TIME KAMU is a creative brand founded by Indrajit Bhunia (INDRA), an Indian YouTuber, Graphic Designer and Video Editor specializing in video editing, graphic design, 2D animation and visual storytelling.";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "TIME KAMU | Official Creative Brand",
    template: "%s | TIME KAMU",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "TIME KAMU",
    "Indrajit Bhunia",
    "INDRA",
    "TIME KAMU Official",
    "Indian YouTuber",
    "Video Editor",
    "Graphic Designer",
    "2D Animator",
    "Video Editing",
    "Graphic Design",
    "2D Animation",
    "Digital Creator",
    "Visual Storytelling",
    "Creative Portfolio",
    "Bengali Video Editor",
    "Tamluk",
    "West Bengal",
    "India",
  ],

  authors: [
    {
      name: FOUNDER_NAME,
    },
  ],

  creator: CREATOR_NAME,
  publisher: BRAND_NAME,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "TIME KAMU | Official Creative Brand",
    description: SITE_DESCRIPTION,
    siteName: BRAND_NAME,

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "TIME KAMU Official Creative Brand",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TIME KAMU | Official Creative Brand",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "TIME KAMU Official Creative Brand",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon" },
      { url: "/md-red-logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/md-red-logo.svg",
    apple: "/md-red-logo.svg",
  },

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: BASE_URL,
  },

  category: "entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Preserve the original hydration behavior.
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/*
          The hero video (/hv.webm) is eagerly buffered
          by its own video element in AboutMe.
        */}

        {/* Vimeo connection optimization */}
        <link
          rel="preconnect"
          href="https://player.vimeo.com"
        />

        <link
          rel="preconnect"
          href="https://i.vimeocdn.com"
        />

        <link
          rel="preconnect"
          href="https://f.vimeocdn.com"
        />

        {/* ImageKit connection optimization */}
        <link
          rel="preconnect"
          href="https://ik.imagekit.io"
          crossOrigin="anonymous"
        />

        <link
          rel="dns-prefetch"
          href="https://ik.imagekit.io"
        />

        <StructuredData />
        <Analytics />
      </head>

      <body
        className={`${poppins.variable} ${cormorantGaramond.variable} antialiased mx-auto`}
      >
        <CustomCursor />
        <ConsoleLog />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisWrapper>
            <Navbar />
            {children}
            <FooterSection />
            {/* <FloatingDockDemo /> */}
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
