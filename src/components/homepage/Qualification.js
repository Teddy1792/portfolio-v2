import { CardContainer, CardBody, CardItem } from "../ui/3d-card-large";
import Image from "next/image";

export default function Project() {
  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <CardContainer containerClassName="">
        <CardBody className="bg-black shadow-lg">
          <CardItem className="p-4" translateZ={50}>
            <a
              href="https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react"
              target="blank"
            >
              <Image
                src="/openClassrooms_logo.png"
                alt="profile_picture"
                className="m-4"
                width={250}
                height={250}
              />
            </a>
          </CardItem>
          <CardItem className="p-4 pt-0 lg:h-36" translateZ={20}>
            <h1 className="text-3xl lg:text-3xl">Qualification</h1>
            <p>Corporation identification: OpenClassrooms</p>
            <p>Diploma: EQF level 6 - Bachelor&#39;s level</p>
            <p>Location: Paris, France</p>
            <p>Contract timeline: November 1st, 2022 - January 1st, 2023 </p>
            <p>Status: completed</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
