// Button component for delete and confirmation

type ButtonProps = {
  type: "green" | "red" | "blue";
  state?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type ,state, onClick }) => {
  if (type === "green") {
     return (
      <button
        className="w-8 h-8 pt-2 flex items-center justify-center rounded-full bg-green-400 border-1 hover:bg-green-500"
        onClick={onClick}
      >
        &#10003;
      </button>
    );}
  else if (type === "red") {
    return (
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-red-400 border-1 hover:bg-red-500"
        onClick={onClick}
      >
        &#10005;
      </button>
    );
  } else if (type === "blue") {
    return (
      <button 
        className="w-8 h-8 flex pb-1.5 text-lg items-center justify-center rounded-full bg-blue-400 border-1 hover:bg-blue-500"
        onClick={onClick}
      >
        {state ? "\u2191" : "\u2193"}
      </button>
    );
  }
}

export default Button;