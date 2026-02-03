import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductNavigation } from "@/components/_homeComponent/ProductNavigation";
import { ServiceBenefits } from "@/components/_homeComponent/ServiceBenefits";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Azure Innovation",
  description:
    "Azure Innovations is a dynamic Apple Reseller and Service Provider, supplying genuine Apple products to individuals and educational institutions. Headquartered in Naraina (Delhi) with branches in Noida and Gurgaon, we ensure seamless service across NCR.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Header />
        <ProductNavigation />
        {children}
        {/* <ServiceBenefits />  */}
        <Footer />
      </body>
    </html>
  );
}
