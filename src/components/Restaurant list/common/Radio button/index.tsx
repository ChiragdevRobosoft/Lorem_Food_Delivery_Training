import React, { FC } from "react";
import "./index.scss";

interface radioProps {
  name: string;
  options: string[];
}

const Radio: FC<radioProps> = ({ name, options }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <div className="radio-container" key={index}>
            <input type="radio" id={option} name={name} value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </>
  );
};

export default Radio;
