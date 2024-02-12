import React from "react";
import Button from "../Button";
import Card from "../Card";
import { WorkDescription } from "../../constants";


const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
        {WorkDescription.map((item,index) => (
          <Card
          key={index}
          src={item.ImageUrl}
          alt={item.alt}
          link={item.link}
          title={item.title}
          date={item.date}
          description={item.description}
        />
     

        ))}
      
      </div>
      <div className="md:pt-16 mx-auto text-center">
        <Button>View More</Button>
      </div>
    </>
  );
};

export default Work;
