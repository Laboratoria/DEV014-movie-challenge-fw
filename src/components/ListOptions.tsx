import React from 'react';

interface SelectedOption {
    value: string;
    label: string;
}

interface Props {
    options: SelectedOption[];
    selectedOption: SelectedOption | null;
    onChange: (option: SelectedOption) => void;
    onClear: () => void;
    tipo: string
}

const ListOptions: React.FC<Props> = ({ options, selectedOption, onChange, onClear, tipo }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedOption = options.find(opt => opt.value === selectedValue);
        if (selectedOption) {
            onChange(selectedOption);
        }
    };

    const handleClear = () => {
        onClear();
    };

    return (
        <>
            <select className="mx-2 me-md-4" value={selectedOption?.value || ""} onChange={handleChange}>
                <option value="" disabled>
                {tipo === 'sort' ? 'Sort by' : 'Filter by Genre'}
                </option>
                {options.map((opt, index) => (
                    <option key={index} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </>


            );
};

export default ListOptions;
