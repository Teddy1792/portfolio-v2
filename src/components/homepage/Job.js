import { CardContainer, CardBody, CardItem } from "../ui/3d-card-large";
import Image from "next/image";

export default function Job() {
  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <CardContainer containerClassName="">
        <CardBody className="bg-black shadow-lg">
          <CardItem className="p-4" translateZ={50}>
            <a href="https://hipto.com/" target="blank">
              <Image
                src="/hiptoLogo.png"
                alt="profile_picture"
                className="m-4"
                width={250}
                height={250}
              />
            </a>
          </CardItem>
          <CardItem className="p-4 pt-0 lg:h-36" translateZ={20}>
            <h1 className="text-3xl lg:text-3xl">Employer</h1>
            <p>Corporation identification: hipto</p>
            <p>Location: Paris, France</p>
            <p>Contract timeline: started on June, 11th, 2024</p>
            <p>Status: fully operational</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
