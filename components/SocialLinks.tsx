import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-3 bg-gray-900 px-5 py-2 rounded-full">
        {socialLinks.map((link) => (
          <div key={link.title}>
            <Link href={link.url} target="_blank">
              <Image
                src={link.icon}
                alt={link.title}
                width={24}
                height={24}
                className="hover:scale-[1.2] duration-300 object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
