import Image from "next/image";

export default function Skills() {
  return (
    <section className="bg-black/50 lg:w-[300px] min-w-[300px]">
      <div className="flex flex-col lg:flex-row items-center shadow-lg">
        <div
          className=" flex justify-center p-8 flex-col items-center gap-8"
          translateZ={50}
        >
          <div className="w-[150px] h-[150px]">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          </div>
          <p>ReactJS</p>
        </div>
        <div className="p-8 flex flex-col items-center gap-8" translateZ={50}>
          <div className="w-[150px] h-[150px]">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          </div>
          <p>NextJS</p>
        </div>
        <div className="p-8 flex flex-col items-center gap-8" translateZ={50}>
          <div className="w-[150px] h-[150px]">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          </div>
          <p>Tailwind CSS</p>
        </div>
        <div className="p-8 flex flex-col items-center gap-8" translateZ={50}>
          <div className="w-[150px] h-[150px]">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
          </div>
          <p>SCSS</p>
        </div>
      </div>
    </section>
  );
}
