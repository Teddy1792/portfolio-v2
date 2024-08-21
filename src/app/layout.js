import { VT323 } from "next/font/google";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/threeBackground/ThreeBackground";
import "./globals.css";
import NavBar from "../components/nav/NavBar";
import { TracingBeam } from "@/components/ui/tracing-beam";

const vT323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "THEO_AB.",
  description: "Theodore Abitbol's portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <body className={`${vT323.className} md:p-20`}>
        <ThreeBackground />
        <TracingBeam>
          <div className="flex flex-row justify-center mb-20">
            <NavBar />
          </div>
          {children}
          <Footer />
        </TracingBeam>
      </body>
    </html>
  );
}
