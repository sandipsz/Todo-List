type ButtonProps = {
  className?: string;
  label: string;
  onClick?: () => void;
};

const Button = ({ className, label, onClick }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        {label}
      </button>
    </>
  );
};

export default Button;
