import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between w-[320px] lg:w-full">
      <h1 className="text-3xl lg:text-5xl">THEO_AB.</h1>
      <h1 className="text-3xl lg:text-5xl flex flex-row">
        Full-stack Cybersecurity/SAP
      </h1>
      <div className="flex flex-row gap-4 items-center">
        <a
          className=""
          target="_blank"
          href="https://www.linkedin.com/in/theodoreabitbol/"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={30} />
        </a>
        <a className="" target="_blank" href="https://github.com/Teddy1792">
          <Image
            src="/github-original.svg"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
      </div>
    </nav>
  );
}
