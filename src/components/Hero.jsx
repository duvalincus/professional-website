import bgimage from "../assets/bgimage.svg"
import { Parallax } from "react-parallax"
import me from '../assets/me.png'

const Hero = () => {
  return (
    <Parallax bgImage={bgimage}>
      <div className="flex flex-col w-full items-center mt-5" id="home">
        <div className="flex flex-row items-center justify-between max-w-min">
            <img src={me} className="rounded-full flex w-1/2"/>
          <p className="rounded-full drop-shadow-2xl text-8xl font-bold ">
            Marco Navarro
          </p>
        </div>
        <p className="w-1/4 text-center my-5 text-xl">Just a little guy. Trying to further my knowledge of computer science and engineering methods and principles.</p>
      </div>  
    </Parallax>
  );
}

export default Hero