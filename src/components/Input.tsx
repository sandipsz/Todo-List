interface InputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  placeholder: string;
  className?: string;
}
const Input = ({
  inputValue,
  setInputValue,
  placeholder,
  type,
  className,
}: InputProps) => {
  return (
    <input
      value={inputValue}
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
