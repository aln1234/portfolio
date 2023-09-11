import Image from "next/image";
import PostDate from "./PostDate";

const Card = ({ link = "#", src, alt, date, title, description }) => {
  console.log(src,"i am a source")
  return (
    <div>
      <div className=" md:w-auto">
        <a href={link} target="_blank">
          <div className="cursor-pointer rounded-xl w-[30rem] h-[20rem] text-center  transition duration-1000 hover:scale-95">
       <Image

              unoptimized
              placeholder={src.blurDataURL}
              loading="lazy"
              src={src.src}
              alt={alt}
              width={300}
              height={300}
              className="object-cover w-[30rem] h-[20rem] rounded-xl hover:opacity-75   "
            />
          
          </div>
        </a>
      </div>
      <div className="">
        <PostDate>{date}</PostDate>
        <a
          href={link}
          target="_blank"
          className="block font-primary text-gray-700 dark:text-gray-300 text-lg md:text-3xl font-medium tracking-wide md:tracking-widest mb-2 md:font-bold transition duration-1000 hover:-translate-y-2"
        >
          {title}
        </a>
        <p className="font-secondary text-gray-700 dark:text-gray-300 text-md font-light text-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
