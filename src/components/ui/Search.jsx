import Select from 'react-select';

export default function ColorSelect({
  options,
  value,
  onChange,
  placeholder = 'Select...',
}) {
  return (
    <div className="w-48">
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        classNamePrefix="select"
        isSearchable={false}
      />
    </div>
  );
}