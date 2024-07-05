import { Amarante } from "next/font/google";
import Localisation from "../components/homepage/Localisation";
import Profile from "../components/homepage/Profile";

export default function Home() {

  return (
    <main>
      <div className="flex flex-col justify-center gap-4 lg:gap-40 lg:justify-between lg:flex-row lg:px-20">
        <Profile />
        <Localisation />
      </div>
    </main>
  );
}