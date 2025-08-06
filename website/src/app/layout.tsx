import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import fav from "@/app/favicon.svg"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // include weights you'll use
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Azure Innovation",
  description: "Azure Innovations is a dynamic Apple Reseller and Service Provider, supplying genuine Apple products to individuals and educational institutions. Headquartered in Naraina (Delhi) with branches in Noida and Gurgaon, we ensure seamless service across NCR.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
