import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import About from "../components/section/About";
import Blog from "../components/section/Blog";
import Contact from "../components/section/Contact";
import Work from "../components/section/Work";
import Section from "../components/Section";
import Particles from "react-tsparticles";
import Particle from "../components/Particle";


export default function Home() {
 

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Albin Lamichhane</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&family=Kreon:wght@300;400;500&display=swap"
        />
      </Head>

      <div className="container px-4 mx-auto lg:px-32 lg:pt-20">
        <Particle/>
        <Hero />
        <Navigation />

        <div className="hidden md:block py-20" />
        <div className="py-20">
          <Section
            id="work"
            title="My Work"
            description="Here's my list collection of favorites project i designed & developed recently. Feel free to explore."
          />
          <Work />



          <Section
            id="about"
            title="About Me"
            description="I am a highly dedicated and talented professional with a passion for creating visually stunning digital experiences through front-end development and data visualization. My background in 3D animation and digital media has provided me with a strong foundation in HTML, CSS, and JavaScript, which I am eager to leverage in my pursuit of a Master's degree in Data Science at Tampere University.

          "
          />
          <About />

          <Section
            id="contact"
            title="Contact"
            description="If you have any question, you can contact me via the information below"
          />
          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://cms.devsign.id/articles?_limit=2&_author.slug=rifqi-rosyidi&_sort=published_at:asc`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// }
