import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <CardContainer containerClassName="">
        <CardBody className="bg-black shadow-lg">
          <CardItem className="p-4" translateZ={50}>
            <Image
              src="/profile_pic.png"
              alt="profile_picture"
              width={250}
              height={250}
            />
          </CardItem>
          <CardItem className="p-4 pt-0 h-36" translateZ={20}>
            <h1 className="text-3xl lg:text-3xl">Profile</h1>
            <p>Full name: Theodore Abitbol</p>
            <p>Status: employed</p>
            <p>Company: Hipto</p>
            <p>Position: Front end developer</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
