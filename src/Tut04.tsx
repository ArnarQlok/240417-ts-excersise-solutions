import React, { useState } from "react";

const InteractiveComponent = () => {
  const [inputText, setInputText] = useState("");
  const [buttonText, setButtonText] = useState("Klicka på mig");

  // onChange handler för input, korrekt typat för ett ändringsevent på ett textfält
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // onClick handler för knappen, korrekt typat för ett klickevent
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButtonText("Klickad!");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>{inputText}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default InteractiveComponent;
