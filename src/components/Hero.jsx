import bgimage from "../assets/vineyardsky.jpg";
import { Parallax } from "react-parallax";
import me from "../assets/memonterey.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Parallax bgImage={bgimage} className="absolute">
      <div
        className="flex flex-col w-full justify-center items-center mt-5 h-screen"
        id="home"
      >
        <div className="flex flex-row items-center justify-center w-1/2">
          <motion.div
            className="block items-center w-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
          >
            <img
              src={me}
              alt="profile-photo"
              height={600}
              width={400}
              className="rounded-full flex overflow-clip shadow-2xl"
            />
          </motion.div>
          <motion.p
            className="rounded-full drop-shadow text-8xl font-bold pl-7 text-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Marco Navarro
          </motion.p>
        </div>
        <motion.p
          className="w-1/2 text-center my-5 text-4xl text-shadow-lg text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Making cool things!
        </motion.p>
      </div>
    </Parallax>
  );
};

export default Hero;
