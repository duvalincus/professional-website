import Link from "./Link"
import links from "../data/links"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="w-full bg-[#ebebebd8] h-[70px] flex flex-row justify-center items-center">
      <div className="flex flex-row justify-between w-5/6 text-lg items-center">
        <p>&copy; 2024 Marco Navarro</p>
        <div className="flex flex-row gap-2">
          
          <Link link={links[0].link} icon={<FaGithub />} text="Github"/>
          <Link link={links[1].link} icon={<CiLinkedin />} text="LinkedIn"/>
          <Link link={links[2].link} icon={<CiMail />} text="E-Mail"/>
          
        </div>
      </div>
    </div>
  )
}

export default Footer