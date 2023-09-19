interface CustomButtonProps {
  title: string;
  containerStyles?: string;
}

const CustomButtons = ({ title, containerStyles }: CustomButtonProps) => {
  return (
    <button type="button" className={`custom-btn ${containerStyles}`}>
      {title}
    </button>
  );
};

export default CustomButtons;
