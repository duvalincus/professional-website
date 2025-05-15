const AboutCard = ({ text, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="rounded-xl bg-center flex justify-center items-center mx-5 my-3 bg-shadow bg-cover"
    >
      <p className="p-10 font-bold text-2xl text-white text-center h-full w-full">
        {text}
      </p>
    </div>
  );
};

export default AboutCard;
