interface ButtonProps {
  className?: string;
  disabled?: boolean;
  textButton: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  textButton,
  handleClick,
}) => {
  return (
    <>
      <button className={className} disabled={disabled} onClick={handleClick}>
        {textButton}
      </button>
    </>
  );
};

export default Button;
