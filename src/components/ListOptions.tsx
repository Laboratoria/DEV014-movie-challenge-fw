import React from "react";
import "./ListOptions.css";

interface Option {
  value: string | null;
  label: string;
}

interface ListOptionsProps {
  options: Option[];
  selectedOption: Option | null;
  onChange: (selectedOption: Option) => void;
  onClear: () => void;
}

export function ListOptions({ options, selectedOption, onChange, onClear }: ListOptionsProps) {
  return (
    <React.Fragment>
      <select
        name=""
        id="seletFilter"
        value={selectedOption?.value || ""}
        onChange={(event) => {
          const selectedOption = options.find(option => option.value === event.target.value);
          if (selectedOption) {
            onChange(selectedOption);
          }
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value || ""}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="resetButton" onClick={onClear}>Reset</button>
    </React.Fragment>
  );
}
