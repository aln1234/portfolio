import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
  FaBehance,

} from "react-icons/fa";
import Button from "./Button";

const Social = () => {
  return (
    <>
      <Button href="https://github.com/aln1234">
        <FaGithubAlt className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://www.instagram.com/alv7/">
        <FaInstagram className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://www.facebook.com/alvin.lamichhane.7">
        <FaFacebookF className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://www.linkedin.com/in/albin-lamichhane-32606213a/">
        <FaLinkedinIn className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://www.behance.net/albinlamichhane">
        <FaBehance className="text-lg lg:text-xl" />
      </Button>
    </>
  );
};

export default Social;
