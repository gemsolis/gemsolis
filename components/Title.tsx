import Image from "next/image";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex relative">
      <Image
        src="/assets/gem-logo.png"
        alt="Title"
        width={25}
        height={25}
        className="object-contain absolute -top-3 "
      />
      <h2 className="px-8 text-5xl text-yellow-500 max-sm:text-[35px]">
        {title}
      </h2>
    </div>
  );
};

export default Title;
