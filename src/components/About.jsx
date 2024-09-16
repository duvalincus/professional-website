import AboutCard from "./AboutCard";
import Title from "./Title";
import { Parallax } from "react-parallax";
import clouds from "../assets/clouds.jpg";
import { motion } from "framer-motion";
import about from "../data/about";

const About = () => {
  return (
    <Parallax bgImage={clouds} bgImageAlt="droplets" strength={200}>
      <div
        className="flex flex-col justify-center items-center pt-10 h-screen"
        id="about"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
        >
          <Title text="About me" />
        </motion.div>
        <div className="grid m-5 grid-cols-2 items-center justify-items-center">
          {about.map((fact, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <AboutCard text={fact.text} image={fact.image}></AboutCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Parallax>
  );
};

export default About;
