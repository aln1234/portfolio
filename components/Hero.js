import Social from "./Social";
import Toggle from "./Toggle";
import Image from "next/image"
import Profile from "../public/assets/image/profile.jpg"

const Hero = () => {
  return (
    <>
      <div className="flex h-screen lg:px-4 md:h-96 justify-center items-center md:justify-between">
        <div className="text-center md:text-left ">
          <p className="font-primary font-medium text-2xl sm:text-2xl md:text-5xl text-gray-700 dark:text-gray-300">
            Albin Lamichhane
          </p>
          <p className="font-primary font-medium text-2xl sm:text-2xl md:text-5xl text-gray-700 dark:text-gray-300 mt-5">
          MSc in Data Science 
          </p>
          <div className="flex items-center justify-center mt-10 sm:hidden">
            <Social />
          </div>
        </div>
        <div className=" w-56 cursor-pointer rounded-full hover:shadow-lg hover:scale-105  transition duration-500 ">
          <Image src={Profile}
          alt="Profile Pic" 
          loading="lazy"
        
          className="rounded-full w-[400px] h-[250px]"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
