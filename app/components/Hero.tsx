import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[300px] bg-[url('/images/hero-image-sm.jpg')] bg-top bg-no-repeat bg-cover flex justify-center -z-10">
      <Image
        src="/images/Logo.svg"
        width={200}
        height={200}
        alt="world ranks logo"
        className="absolute top-[40px] text-center"
      />
    </div>
  );
}
