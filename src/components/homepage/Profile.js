import Image from "next/image";

export default function Profile() {
  return (
    <section className="lg:w-[350px] min-w-[300px] mb-4">
      <div className="flex flex-col items-center w-full rounded-2xl border border-white/10 bg-black/50 shadow-lg">
        {/* Picture */}
        <div className="px-4 py-[10px] flex items-center justify-center">
          <Image
            src="/profile_pic2.png"
            alt="profile_picture"
            width={200}
            height={200}
          />
        </div>

        {/* Info */}
        <div className="p-4 space-y-1">
          <p className="text-lg md:text-2xl">Full name: Theodore Abitbol</p>
          <p className="text-lg md:text-2xl opacity-90">
            Company: NoChain Technology
          </p>
          <p className="text-lg md:text-2xl opacity-90">
            Position: Full-stack developer
          </p>
        </div>
      </div>
    </section>
  );
}
