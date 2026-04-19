import React from "react";

interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

function Button({ color = "primary", children, onClick }: Props) {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
}

export default Button;
