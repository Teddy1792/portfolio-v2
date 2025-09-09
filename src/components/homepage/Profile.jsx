import Image from "next/image";

export default function Profile() {
  return (
    <section className="w-full mb-4 lg:max-w-none lg:w-[350px]">
      <div className="flex flex-col items-center w-full rounded-2xl border border-white/10 bg-black/50 shadow-lg">
        {/* Picture */}
        <div className="px-3 flex items-center justify-center">
          <Image
            src="/profile_pic2.png"
            alt="profile_picture"
            width={200}
            height={200}
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-3 space-y-1 text-center">
          <p className="text-sm sm:text-base lg:text-2xl">
            Full name: Theodore Abitbol
          </p>
          <p className="text-sm sm:text-base lg:text-xl opacity-90">
            Position: Full-stack developer
          </p>
        </div>
      </div>
    </section>
  );
}
