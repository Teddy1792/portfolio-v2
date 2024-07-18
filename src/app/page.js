import Localisation from "../components/homepage/Localisation";
import Profile from "../components/homepage/Profile";
import Job from "../components/homepage/Job";
import Skills from "../components/homepage/Skills";
import Project from "../components/homepage/Project";
import Qualification from "../components/homepage/Qualification";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center gap-4 lg:gap-x-40 lg:gap-y-10 items-center lg:px-20">
        <div className="flex flex-col justify-center gap-4 lg:gap-40 lg:justify-between lg:flex-row lg:px-20">
          <Profile />
          <Localisation />
        </div>
        <Job />
        <Skills />
        <Project />
        <Qualification />
      </div>
    </main>
  );
}
