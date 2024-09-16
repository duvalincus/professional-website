const Experience = ({ text, date, title, location, link }) => {
  return (
    <a
      className="flex flex-col justify-center items-center rounded-lg p-4 w-[400px] m-4 text-slate-100
    transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      href={link}
      target="_blank"
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div>
          <p className="text-xl  font-bold">{title}</p>
          <p className="text-gray-300">{location}</p>
        </div>
        <p className="text-slate-300 w-1/3">{date}</p>
      </div>
      <p className="pt-3">{text}</p>
    </a>
  );
};

export default Experience;
