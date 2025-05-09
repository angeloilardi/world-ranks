import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/images/Logo.svg";

export default function Hero() {
  return (
    <>
      <div className="relative h-[300px] bg-[url('/images/hero-image-sm.jpg')] bg-top bg-no-repeat bg-cover flex justify-center -z-10"></div>
      <Link
        href="/"
        className="z-20 absolute top-5 left-[50%] -translate-x-[50%]"
      >
        <Image src={logo} alt="world ranks logo" />
      </Link>
    </>
  );
}
