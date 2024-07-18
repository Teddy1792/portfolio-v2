export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between w-[320px] lg:w-full">
      <h1 className="text-3xl lg:text-5xl">THEO_AB.</h1>
      <div className="flex flex-row gap-4 items-center">
        <a className="" href="mailto:theodore@gmail.com">
          <img src="/email.svg"></img>
        </a>
        <a className="" href="https://www.linkedin.com/in/theodoreabitbol/">
          <img src="/linkedin.svg"></img>
        </a>
      </div>
    </nav>
  );
}
