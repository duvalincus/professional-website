import AboutCard from "./AboutCard";
import Title from "./Title";
import { Parallax } from "react-parallax";
import clouds from "../assets/clouds.jpg";
import resume from "../assets/resume.pdf";
import ucr from "../assets/ucr.webp"
import norcal from "../assets/norcal.webp"
import circuit from "../assets/circuit.jpg"
import img from "../assets/img.jpg"
import droplets from "../assets/droplets.jpg"

const About = () => {
  return (
    <Parallax bgImage={clouds} bgImageAlt="droplets" strength={200}>
      <div
        className="flex flex-col justify-center items-center pt-10 h-screen"
        id="about"
      >
        <Title text="About me" />
        <div className="flex m-5 justify-center">
          <AboutCard
            text="I'm a third year Computer Engineering major at UCR."
            image={ucr}
          ></AboutCard>
          <AboutCard
            text="I'm from NorCal and I miss it a lot sometimes."
            image={norcal}
          ></AboutCard>
        </div>
        <div className="flex m-5 justify-center">
          <AboutCard
            text="I'm interested in building computers, and hardware in general."
            image={img}
          />
          <AboutCard
            text="I'm shaky on circuits, but I liked arduino so I'd love to learn."
            image={circuit}
          />
        </div>
          <a href={resume} target="_blank">
            <AboutCard
              text="Here's my resume."
              image={droplets}
            >
            </AboutCard>
          </a>
      </div>
    </Parallax>
  );
}

export default About