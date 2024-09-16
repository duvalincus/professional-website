const Title = ({ text, color = "black" }) => {
  return (
    <div>
      <p className={`font-bold text-5xl pb-2 text-${color} `}>{text}</p>
      <hr style={color != "black" ? { color: "white" } : { color: "black" }} />
    </div>
  );
};

export default Title;
