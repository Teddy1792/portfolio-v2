import Localisation from "../components/homepage/Localisation";
import Profile from "../components/homepage/Profile";
import Job from "../components/homepage/Job";
import Stack from "../components/homepage/Stack";
import Education from "../components/homepage/Education";

export default function Home() {
  return (
    <main>
      <div className="w-full flex flex-col">
        <div className="flex w-full">
          <div className="gap-2 flex-row">
            <Profile />
            <Job />
          </div>
          <Stack />
        </div>
        <div className="flex">
          <Localisation />
          <Education />
        </div>
      </div>
    </main>
  );
}
