import Image from "next/image";

export default function Job() {
  return (
    <section className="w-full max-w-sm mb-4 lg:max-w-[350px]">
      <div className="flex flex-col sm:flex-row w-full rounded-2xl border border-white/10 bg-black/50 shadow-lg">
        {/* Logo */}
        <div className="p-4 flex items-center justify-center">
          <a href="https://www.nochaintechnologies.com/" target="_blank">
            <Image
              src="/no_chain_technologies_logo.png"
              alt="NCT logo"
              width={80}
              height={80}
              className="rounded-md w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </a>
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-sm sm:text-base lg:text-2xl">
            NoChain Technology
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-80">
            Levallois, France
          </p>
          <p className="text-sm sm:text-base md:text-lg opacity-80">
            Started 02/06/2025
          </p>
        </div>
      </div>
    </section>
  );
}
