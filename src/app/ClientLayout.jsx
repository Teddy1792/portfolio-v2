"use client";

import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import dynamic from "next/dynamic";
import useIsMobile from "../utils/useIsMobile";

// WebGL client-only
const ThreeBackground = dynamic(
  () => import("../components/threeBackground/ThreeBackground"),
  { ssr: false }
);

export default function ClientLayout({ children }) {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <ThreeBackground />}
      <div
        aria-hidden
        className="crt-overlay pointer-events-none fixed inset-0 z-[60]"
      />
      {isMobile ? (
        <>
          <div className="flex flex-row justify-center m-10 crt-content">
            <NavBar />
          </div>
          <div className="crt-content mx-auto w-full px-2">{children}</div>
          <Footer />
        </>
      ) : (
        <TracingBeam>
          <div className="flex flex-row justify-center m-10 crt-content">
            <NavBar />
          </div>
          <div className="crt-content mx-auto w-full px-2">{children}</div>
          <Footer />
        </TracingBeam>
      )}
    </>
  );
}
