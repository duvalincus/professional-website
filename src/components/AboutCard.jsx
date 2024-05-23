
const AboutCard = ({text, image}) => {
  return (
    <div
        style={{ backgroundImage: `url(/${image})`}}
        className="rounded-xl bg-fill flex justify-center items-center mx-5 min-w-1/4 max-w-1/4 
        transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <p className="p-10 font-bold text-2xl text-white text-center h-full w-full">
        {text}
      </p>
    </div>
  )
}

export default AboutCard