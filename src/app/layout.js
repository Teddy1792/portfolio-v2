import { VT323 } from "next/font/google";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/threeBackground/ThreeBackground";
import "./globals.css";
import NavBar from "../components/nav/NavBar";

const vT323 = VT323({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "THEO_AB.",
  description: "Theodore Abitbol's portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vT323.className} md:p-20`} >
      <ThreeBackground />
        <div className="flex flex-row mb-20">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}