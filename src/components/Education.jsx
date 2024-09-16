import Title from "./Title";
import ucrlogo from "../assets/ucr.png";
import scclogo from "../assets/scc.webp";
import Dropdown from "react-bootstrap/Dropdown";
import { Parallax } from "react-parallax";
import russian from "../assets/russian.jpg";
import { motion } from "framer-motion";
import skills from "../data/skills";
import projects from "../data/projects";

const width = 100;

const animationY = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

const animationX = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

const Education = () => {
  return (
    <Parallax bgImage={russian}>
      <div
        className="flex flex-col justify-center items-center h-screen"
        id="education"
      >
        <motion.div
          variants={animationY}
          initial="hidden"
          whileInView="show"
          transition={{
            delay: 0.2,
            type: "tween",
            duration: 0.5,
          }}
        >
          <Title text={"Education/Skills"} />
        </motion.div>
        <motion.div
          className="flex flex-row gap-5 justify-center items-center w-3/5 mt-5 m-2"
          variants={animationX}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <img src={ucrlogo} alt="ucr logo" width={120} />
          <div className="text-center">
            <p>
              <span className="font-bold">UC Riverside</span>
            </p>
            <p>August 2022 - June 2025</p>
          </div>
          <p>BS Computer Engineering</p>
          <p>3.94 GPA</p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Classes Taken
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Web Development</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Product Development Methodologies
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Artificial Intelligence
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </motion.div>
        <motion.div
          className="flex flex-row gap-5 justify-center items-center w-3/5 mt-3"
          variants={animationX}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <img src={scclogo} width="120" alt="scc logo" />
          <div className="text-center">
            <p>
              <span className="font-bold">Sacramento City College</span>
            </p>
            <p>August 2020 - June 2022</p>
          </div>
          <p>Transfer Computer Science</p>
          <p>4.0 GPA</p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Classes Taken
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">C++</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Discrete Math</Dropdown.Item>
              <Dropdown.Item href="#/action-3"></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </motion.div>
        <motion.div
          variants={animationX}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-2xl font-bold m-2 pb-2 text-center">Projects:</p>
          <div className="flex flex-row justify-center items-center gap-3">
            {projects.map((project, index) => {
              return (
                <a href={project.link} target="_blank" key={index}>
                  <img
                    src={project.image}
                    alt="project logo"
                    width={width}
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={animationX}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-2xl font-bold m-2 text-center">
            Skills Developed:
          </p>
          <div className="flex justify-center items-center gap-4">
            {skills.map((skill, index) => {
              return (
                <motion.div key={index}>
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    width={width}
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Parallax>
  );
};

export default Education;
