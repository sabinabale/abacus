"use client";
import React, { useState } from "react";

export default function ButtonGroup({ color, value, setTotalValue }) {
  const [clickedButtons, setClickedButtons] = useState(Array(5).fill(false));

  const handleClick = (index) => {
    if (!clickedButtons[index]) {
      const newClickedButtons = [...clickedButtons];
      newClickedButtons[index] = true;
      setClickedButtons(newClickedButtons);
      setTotalValue((prevTotal) => prevTotal + value);
    }
  };

  const activeButtons = clickedButtons.map((clicked, index) => {
    return (
      clicked && (
        <Button
          key={index}
          color={color}
          onClick={() => handleClick(index)}
          disabled={true} // Disable clicked buttons
        />
      )
    );
  });

  const inactiveButtons = clickedButtons.map((clicked, index) => {
    return (
      !clicked && (
        <Button key={index} color={color} onClick={() => handleClick(index)} />
      )
    );
  });

  return (
    <div className="absolute flex -top-[30px] w-full gap-x-0">
      <div className="flex">{inactiveButtons}</div>
      <div className="flex ml-auto">{activeButtons}</div>
    </div>
  );
}

function Button({ color, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`w-[60px] h-[60px] ${color} rounded-full`}
      disabled={disabled}
    ></button>
  );
}
