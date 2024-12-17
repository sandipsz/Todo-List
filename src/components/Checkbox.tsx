interface CheckboxProps {
  isChecked: boolean;
  handleCheckboxChange: () => void;
}

const Checkbox = ({ isChecked, handleCheckboxChange }: CheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default Checkbox;
