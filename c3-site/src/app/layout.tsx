import type { Metadata } from "next";
import { Antic_Didone, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-antic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.c3churchglobal.com"),
  title: "C3 Church Global | Spirit Filled Church with Locations Throughout the World",
  description:
    "C3 Church Global is a family of churches, committed to helping people know Jesus in a fresh, personal way. Ask us about finding a C3 near you!",
  openGraph: {
    title: "C3 Church Global | Spirit Filled Church with Locations Throughout the World",
    description:
      "C3 Church Global is a family of churches, committed to helping people know Jesus in a fresh, personal way. Ask us about finding a C3 near you!",
    siteName: "C3 Church Global",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${anticDidone.variable}`}>
      <body>{children}</body>
    </html>
  );
}
