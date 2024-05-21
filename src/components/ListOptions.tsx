import React from "react";

export function ListOptions(props: {
  options: { value: string; label: string }[];
  selectedOption: { value: string; label: string };
  onChange: () => void;
  onClear: () => void;
}) {
  return (
    <React.Fragment> 
      <select name="" id="" onChange={props.onChange}>
        {props.options.map((option) => {
          return <option value={option.value}> {option.label} </option>;
        })}
      </select>
      <button className="resetButton" onClick={props.onClear}>Reset</button>
    </React.Fragment> //div tambien puede servir 🤠
  );
}
