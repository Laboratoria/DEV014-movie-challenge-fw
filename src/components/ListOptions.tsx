import React from "react";
import "./ListOptions.css"

export function ListOptions(props: {
  options: { value: string; label: string }[];
  selectedOption: { value: string; label: string };
  onChange: (selectedOption: { value: string; label: string }) => void;
  onClear: () => void;
}) {
  return (
    <React.Fragment> 
      <select  name="" id="seletFilter" onChange={(event)=>props.onChange(props.options.find((option)=>option.value===event.target.value))}>
        {props.options.map((option) => {
          return <option selected={props.selectedOption?.value===option.value} key={option.value} value={option.value}> {option.label} </option>;
        })}
      </select>
      <button className="resetButton" onClick={props.onClear}>Reset</button>
    </React.Fragment> //div tambien puede servir 🤠
  );
}