import Title from "./Title";
import Experience from "./Experience";
import jobs from "../data/jobs";
import { Parallax } from "react-parallax";
import dunes from "../assets/dunes.jpg";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <Parallax bgImage={dunes}>
      <div
        className="flex flex-col justify-center items-center h-screen"
        id="resume"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            type: "tween",
            duration: 0.5,
          }}
        >
          <Title text="Experience" color="slate-100" />
        </motion.div>
        <div className="flex flex-wrap justify-center gap-5 pt-5">
          {jobs.map((job, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 * (index + 1),
                  type: "tween",
                  duration: 0.5,
                }}
              >
                <Experience
                  text={job.text}
                  date={job.date}
                  title={job.title}
                  location={job.location}
                  link={job.link}
                  key={index}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Parallax>
  );
};

export default Resume;
