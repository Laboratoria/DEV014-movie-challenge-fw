import '@testing-library/jest-dom';
import { render, fireEvent } from "@testing-library/react";
import { ListOptions } from "./ListOptions";

describe("ListOptions", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  const selectedOption = { value: "2", label: "Option 2" };
  const onChange = jest.fn();
  const onClear = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
    onClear.mockClear();
  });

  it("should render options correctly", () => {
    const { container } = render(
      <ListOptions
        options={options}
        selectedOption={selectedOption}
        onChange={onChange}
        onClear={onClear}
      />
    );

    const selectElement = container.querySelector("#seletFilter");

    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue(selectedOption.value);
    options.forEach((option) => {
      expect(selectElement).toHaveTextContent(option.label);
    });
  });

  it("should call onChange when an option is selected", () => {
    const { container } = render(
      <ListOptions
        options={options}
        selectedOption={selectedOption}
        onChange={onChange}
        onClear={onClear}
      />
    );

    const selectElement = container.querySelector("#seletFilter");

    fireEvent.change(selectElement, { target: { value: "3" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(options[2]);
  });

});
