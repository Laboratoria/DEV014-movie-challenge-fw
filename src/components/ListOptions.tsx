export function ListOptions(props: {
  options: [{ value: string; label: string }];
  selectedOption: { value: string; label: string };
  onChange: () => void;
  onClear: () => void;
}) {
  return (
    <select name="" id="">
      {props.options.map((option) => {
        return <option value={option.value}> {option.label} </option>;
      })}
    </select>
  );
}
