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
          <img src="https://lh3.googleusercontent.com/SKZnsTtOdvmErmRUCBoXq8qQsp7iyHf2mDxT4n0gV30XffZbWI7qZgLvUNQFf2JcqSg1yVngrlzjPjlVR2El-bl-uvPfkyCaZsyi5papqwlwfwedImOoncue1h1qb6TsOIoYyHwob70EE1XSFIfflSs4Bp6lVIb9BNU9QMlu31Jt61IYaAiJ4quyo635pi9VGOotwmwb4Yy0aOPbkC-WRzF-GRLnmFrrDrhiEVgOdHPdlgbjalkK-dJqY72qX7sovMBpwgfKQiLwCunHUy9OjEO9-cyL4uys34__YQ4uCXQM74TZm8AuKOtTMl13CEFpsdpej3-SH9KmHwLs8xoxp-vt0I-GNfjPTBLxNTLZYRoN-ACBbIcTLB4zIaY_YI0r71yxmCXC93_imgjWrgtAwnJerc3G061JDCj6Pc1gDPIFnjs3kTQK4V-ylS-fWR15RUvvfm6UF5bhdGnPwu7iV0SjSkGo-SS7GgPQN4flza5ZKHkEMwsVgSjOxy-N6k3eP4SZ0q9uStYazMGz-BRVEbZHOJfNG7tgP4WhOSvJFRUDS6vln-NcMAYRQE5-m0lJkkJpFaVRhg2wIDdO3MxCabnD_fvsL6gQirWMJzpXF2y9D6g3fnaRqX8c7nvM4PUjdER0Y7Pq9lNg13Odkb5dM-F3Kkg62VFbgP9EyZ6Fv_xMYDqZ4TBlvvYPgzmHMdR6H7F8ARxVFz7wCG0mqAtPlOHACF8Q901f6bWqdVMdMyLtgghD-xxiM32lvRDWpWBE5CWYwFaBNcPak9f7fOVGAGNkRwk-AqPA5hlSuwaJQ-0__MtmTq-UKXfnIg8vzPI_C-iMiHkBebav2kr0izmSWpCy3UWKwxFQV0tc3_GraJAS8wV9RekqdAdvWyfgTR9sjB6UuGb_9gn8jjYmKcREv_Pqi973aSlp9YbuTcZ3FZ4LBusq=w216-h220-no?authuser=0" 
          alt="Profile Pic" 
          loading="lazy"
          className="rounded-full"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
