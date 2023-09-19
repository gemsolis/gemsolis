import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-400 py-8 px-20 flex justify-between items-center uppercase max-sm:hidden">
      <Link
        href="/"
        className="text-lg text-black flex items-center scale-[1.1]"
      >
        <Image src="/assets/gem-logo.png" alt="logo" width={32} height={32} />
        <span className="px-2 text-white">GEM.DEV</span>
      </Link>
      <p>Developed by Gem Solis.</p>
      <p>2023</p>
    </div>
  );
};

export default Footer;
