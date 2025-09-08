import Localisation from "../components/homepage/Localisation";
import Profile from "../components/homepage/Profile";
import Job from "../components/homepage/Job";
import Stack from "../components/homepage/Stack";
import Education from "../components/homepage/Education";

export default function Home() {
  return (
    <main className="px-2">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mx-auto max-w-5xl">
        {/* Top-left */}
        <div className="flex flex-col gap-2 h-full">
          <Profile />
          <Job />
        </div>

        {/* Top-right */}
        <div className="w-full h-full">
          <Stack />
        </div>

        {/* Bottom-left */}
        <div className="h-full">
          <Localisation />
        </div>

        {/* Bottom-right */}
        <div className="h-full">
          <Education />
        </div>
      </div>
    </main>
  );
}
