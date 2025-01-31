import { CardContainer, CardBody, CardItem } from "../ui/3d-card-large";
import Image from "next/image";

export default function Project() {
  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <CardContainer containerClassName="">
        <CardBody className="bg-black shadow-lg">
          <CardItem className="p-4" translateZ={50}>
            <a href="https://www.editionspassepasse.fr/" target="blank">
              <Image
                src="/passepasse.png"
                alt="profile_picture"
                className="m-4"
                width={250}
                height={250}
              />
            </a>
          </CardItem>
          <CardItem className="p-4 pt-0 lg:h-36" translateZ={20}>
            <h1 className="text-3xl lg:text-3xl">Freelance client</h1>
            <p>Corporation identification: Les Editions Passe Passe</p>
            <p>Location: Paris, France</p>
            <p>Contract timeline: started on October, 1st, 2023</p>
            <p>Status: completed</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
