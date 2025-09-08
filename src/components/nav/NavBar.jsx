import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex flex-col items-center gap-2 w-full sm:flex-row sm:justify-between sm:gap-4">
      {/* Logo / Name */}
      <h1 className="text-3xl sm:text-3xl lg:text-5xl">THEO_AB.</h1>

      {/* Subtitle */}
      <h2 className="text-3xl text-center lg:text-5xl">
        Full-stack Cybersecurity/SAP
      </h2>

      {/* Social icons */}
      <div className="flex flex-row gap-3 items-center">
        <a target="_blank" href="https://www.linkedin.com/in/theodoreabitbol/">
          <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
        </a>
        <a target="_blank" href="https://github.com/Teddy1792">
          <Image
            src="/github-original.svg"
            alt="GitHub"
            width={30}
            height={30}
          />
        </a>
      </div>
    </nav>
  );
}
