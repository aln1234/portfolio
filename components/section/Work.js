import React from "react";
import Button from "../Button";
import Card from "../Card";


const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
      <Card
          src="\assets\image\voice.png"
          alt="Voice GPT"
          link="https://voicegpt-omega.vercel.app/"
          title="Voice GPT"
          date="Feb 18"
          description="In this project user can use their voice to send prompt to Chat Gpt and get results"
        />
        <Card
         src="\assets\image\restore.png"
          alt="Restore Photo"
          link="https://restorephoto.vercel.app/"
          title="Restore Photo"
          date="Feb 18"
          description="This is my first time implementing a machine leraning project where user can restore any blur photo using Artificial Intelligence"
        />
        <Card
          src="\assets\image\two.png"
          alt="Webscraping image"
          link="https://thekruathai.com/menu/"
          title="Kruthai Restaurant"
          date="June 20"
          description="A free-lancing project for a Thai Restaurant"
        />
        <Card
          src="\assets\image\three.png"
          alt="A ecoomerce site"
          link="https://hajurbuwa.com/"
          title="Ecommerce Website"
          date="Oct 19"
          description="A ecommerce site that let you buy and sell goods"
        />
        <Card
          src="\assets\image\four.png"
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
