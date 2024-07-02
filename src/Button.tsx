import React from "react";

interface props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

const Button = ({ onClick, children }: props) => {
  return (
    <button
      className="bg-blue-400  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
