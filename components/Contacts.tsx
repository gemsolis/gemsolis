import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="bg-hero-bg bg-fixed bg-cover bg-no-repeat section-wrapper bg-gray-900 text-white mb-0 text-center">
        <strong className="text-[6vw] max-sm:text-[5.2vw] text-yellow-500 ">
          gemsolis.dev@gmail.com
        </strong>
        <div className="w-full my-10 flex gap-5 justify-around items-start max-lg:flex-col">
          <div className="w-full flex justify-center">
            <Image
              src="/assets/contacts-image.png"
              alt="Contact Me"
              width={400}
              height={400}
            />
          </div>

          <div className="w-full px-[5%]">
            <h2 className="text-5xl text-left max-sm:text-[30px]">
              Feel free to send me an email or follow me in social media
            </h2>

            {socialLinks.map((link) => (
              <div
                key={link.title}
                className="flex justify-between mx-5 py-2 border-b-2 border-yellow-500 mt-10"
              >
                <span className="text-2xl uppercase">{link.title}</span>
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
      </div>
    </div>
  );
};

export default Contacts;
