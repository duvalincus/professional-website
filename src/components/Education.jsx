import Title from "./Title";
import ucrlogo  from '../assets/ucr.png'
import scclogo  from '../assets/scc.webp';
import clogo from '../assets/c++.svg'
import arduino from "../assets/Arduino.svg";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Parallax } from "react-parallax";
import russian from '../assets/russian.jpg'
import isalogo from '../assets/isalogo.svg'
import vexlogo from '../assets/vexlogo.svg'
import reacticon from '../assets/React-icon.png'

const width = 100;

const Education = () => {
  return (
    <Parallax bgImage={russian}>
      <div
        className="flex flex-col justify-center items-center h-screen"
        id="education"
      >
        <Title text={"Education/Skills"} />
        <div className="flex flex-row gap-5 justify-center items-center w-2/5 mt-5 m-2">
          <img src={ucrlogo} alt="ucr logo" width={120} />
          <div className="text-center">
            <p>
              <span className="font-bold">UC Riverside</span>
            </p>
            <p>August 2022 - June 2025</p>
          </div>
          <p>BS Computer Engineering</p>
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
        </div>
        <p></p>
        <div className="flex flex-row gap-5 justify-center items-center w-1/3 mt-3">
          <img src={scclogo} width="120" alt="scc logo" />
          <div className="text-center">
            <p>
              <span className="font-bold">Sacramento City College</span>
            </p>
            <p>August 2020 - June 2022</p>
          </div>
          <p>Transfer Computer Science</p>
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
        </div>
        <p className="text-2xl font-bold m-2 pb-2">Projects:</p>
        <div className="flex flex-row justify-center items-center w-1/3 gap-3">
          <a href="https://isa.ucrhighlanders.org/" target="_blank">
            <img
              src={isalogo}
              width={100}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <a
            href="https://github.com/acm-ucr/vex-robotics-website"
            target="_blank"
          >
            <img
              src={vexlogo}
              width={100}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
        </div>
        <p className="text-2xl font-bold m-2">Skills Developed:</p>
        <div className="w-1/3 flex justify-center items-center gap-4">
          <img
            src={clogo}
            alt="c++ logo"
            width={width}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={arduino}
            alt="arduino logo"
            width={width}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={js}
            alt="js logo"
            width={width}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={mongodb}
            alt="mongo logo"
            width={width}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={reacticon}
            alt="react logo"
            width={width}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
      </div>
    </Parallax>
  );
};

export default Education;
