import Social from "./Social";
import Toggle from "./Toggle";

const Hero = () => {
  return (
    <>
      <div className="flex h-screen lg:px-4 md:h-96 justify-center items-center md:justify-between">
        <div className="text-center md:text-left ">
          <p className="font-primary font-medium text-2xl sm:text-2xl md:text-5xl text-gray-700 dark:text-gray-300">
            Albin Lamichhane
          </p>
          <p className="font-primary font-medium text-2xl sm:text-2xl md:text-5xl text-gray-700 dark:text-gray-300 mt-5">
            UI/UX Designer/Web Developer
          </p>
          <div className="flex items-center justify-center mt-10 sm:hidden">
            <Social />
          </div>
        </div>
        <div className=" w-56 cursor-pointer rounded-full hover:shadow-lg hover:scale-105  transition duration-500 ">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.6435-9/78101211_2555839957818249_4531610901563834368_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=Hoe8g4N84XkAX8xHJWO&_nc_ht=scontent.fktm7-1.fna&oh=00_AT920RPC4oMNnb6Xw0POabXy4K3r_muvAVhtxLoKN10vRw&oe=62188BBD" 
          alt="Profile Pic" 
          loading="lazy"
          className="rounded-full"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
