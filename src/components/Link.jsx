
const Link = ({ link = "" , icon, text}) => {
  return (
    <button
      className="btn btn-secondary flex flex-row
    transition ease-in-out hover:scale-105 duration-300"
    >
      <a
        href={`${link}`}
        target="_blank"
        className="flex flex-row items-center gap-2"
      >
        {icon} {text}
      </a>
    </button>
  );
};

export default Link;
