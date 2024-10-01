import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const APP_NAME = "NJS App";
const APP_DESCRIPTION = "Next.js + Serwist PWA";


export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  generator: "Next.js",
  keywords: ["nextjs", "next14", "pwa", "serwist"],
  authors: [
    {
      name: "sethoharra",
      url: "https://www.linkedin.com/in/seth-o-harra-591b9638/",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <style>{`
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
