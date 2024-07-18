import { CardContainer, CardBody, CardItem } from "../ui/3d-card-large";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <CardContainer containerClassName="">
        <CardBody className="flex flex-row items-center  bg-black shadow-lg">
          <CardItem
            className=" flex justify-center items-center p-8 flex flex-col items-center gap-8"
            translateZ={50}
          >
            <div className="w-[150px] h-[150px]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </div>
            <p>ReactJS</p>
          </CardItem>
          <CardItem
            className="p-8 flex flex-col items-center gap-8"
            translateZ={50}
          >
            <div className="w-[150px] h-[150px]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            </div>
            <p>NextJS</p>
          </CardItem>
          <CardItem
            className="p-8 flex flex-col items-center gap-8"
            translateZ={50}
          >
            <div className="w-[150px] h-[150px]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </div>
            <p>Tailwind CSS</p>
          </CardItem>
          <CardItem
            className="p-8 flex flex-col items-center gap-8"
            translateZ={50}
          >
            <div className="w-[150px] h-[150px]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
            </div>
            <p>SCSS</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
