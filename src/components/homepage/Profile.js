import Image from "next/image";

export default function Profile() {
  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <div className="bg-black/50 shadow-lg">
        <div className="p-4" translateZ={50}>
          <Image
            src="/profile_pic.png"
            alt="profile_picture"
            width={250}
            height={250}
          />
        </div>
        <div className="p-4 pt-0 lg:h-36" translateZ={20}>
          <h1 className="text-3xl lg:text-3xl">Profile</h1>
          <p>Full name: Theodore Abitbol</p>
          <p>Status: employed</p>
          <p>Company: Hipto</p>
          <p>Position: Front end developer</p>
        </div>
      </div>
    </section>
  );
}
