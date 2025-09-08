export default function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col lg:flex-row lg:gap-16 w-full justify-center p-[50px] mt-20">
      <p>Year {currentYear}</p>
      <p> portfolio v2.0</p>
      <a
        href="https://portfolio-git-main-teddy1792s-projects.vercel.app/"
        target="blank"
      >
        <p>archive available for the v1.0</p>
      </a>
    </footer>
  );
}
