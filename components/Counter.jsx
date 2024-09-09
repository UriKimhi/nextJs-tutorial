const Counter = ({ counter }) => {
  return (
    <span className="countdown font-mono text-6xl">
      <span style={{ "--value": `${counter}` }}></span>
    </span>
  );
};

export default Counter;
