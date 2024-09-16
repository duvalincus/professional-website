import bgimage from "../assets/bgimage.svg";
import { Parallax } from "react-parallax";
import me from "../assets/me.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Parallax bgImage={bgimage}>
      <div
        className="flex flex-col w-full justify-center items-center mt-5"
        id="home"
      >
        <div className="flex flex-row items-center justify-center w-1/2">
          <motion.div
            className="flex items-center w-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
          >
            <img
              src={me}
              alt="profile-photo"
              className="rounded-full flex aspect-square overflow-hidden shadow-lg"
            />
          </motion.div>
          <motion.p
            className="rounded-full drop-shadow-xl text-8xl font-bold pl-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Marco Navarro
          </motion.p>
        </div>
        <motion.p
          className="w-1/2 text-center my-5 text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Trying to further my knowledge of computer science and engineering
          methods and principles.
        </motion.p>
      </div>
    </Parallax>
  );
};

export default Hero;
