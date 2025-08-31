import Image from "next/image";

export default function Job() {
  return (
    <section className="lg:w-[350px] min-w-[300px] mb-4">
      <div className="flex w-full rounded-2xl border border-white/10 bg-black/50 shadow-lg">
        {/* Logo */}
        <div className="p-4 flex items-center justify-center">
          <a href="https://www.nochaintechnologies.com/" target="blank">
            <Image
              src="/no_chain_technologies_logo.png"
              alt="NCT logo"
              width={80}
              height={80}
              className="rounded-md"
            />
          </a>
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-xl md:text-2xl font-semibold">
            NoChain Technology
          </h1>
          <p className="text-sm md:text-2xl opacity-80">Levallois, France</p>
          <p className="text-sm md:text-2xl opacity-80">Started 02/06/2025</p>
        </div>
      </div>
    </section>
  );
}
