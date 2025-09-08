import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/threeBackground/ThreeBackground";
import "./globals.css";
import NavBar from "../components/nav/NavBar";
import { TracingBeam } from "@/components/ui/tracing-beam";

export const metadata = {
  title: "THEO_AB.",
  description: "Theodore Abitbol's portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--bg)] text-[var(--text)]">
        <ThreeBackground />

        {/* CRT overlay */}
        <div
          aria-hidden
          className="crt-overlay pointer-events-none fixed inset-0 z-[60]"
        />

        <TracingBeam>
          <div className="flex flex-row justify-center align-items m-10 crt-content">
            <NavBar />
          </div>
          <div className="crt-content">{children}</div>
          <Footer />
        </TracingBeam>
      </body>
    </html>
  );
}
