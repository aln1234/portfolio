import React from "react";
import Button from "../Button";
import Card from "../Card";
import Company from "../../public/assets/image/company.png";
import Resta from "../../public/assets/image/two.png";
import Hajur from "../../public/assets/image/three.png";
import Four from "../../public/assets/image/four.png";

const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
        <Card
          src={Company}
          alt="Old portfolio image"
          link="https://everestsalescompany.com/"
          title="Company Profile Site"
          date="Feb 18"
          description="This is my first freelance project displaying information related to a company."
        />
        <Card
          src={Resta}
          alt="Webscraping image"
          link="https://thekruathai.com/menu/"
          title="Kruthai Restaurant"
          date="June 20"
          description="A free-lancing project for a Thai Restaurant"
        />
        <Card
          src={Hajur}
          alt="A ecoomerce site"
          link="https://hajurbuwa.com/"
          title="Ecommerce Website"
          date="Oct 19"
          description="A ecommerce site that let you buy and sell goods"
        />
        <Card
           src={Four}
          alt="Personal Project"
          link="https://disney-clone-odu3ui157-albinlamichhane9-gmailcom.vercel.app/"
          title="Github.io Portfolio"
          date="Des 18"
          description="Clone  of Disney web application"
        />
      </div>
      <div className="md:pt-16 mx-auto text-center">
        <Button>View More</Button>
      </div>
    </>
  );
};

export default Work;
