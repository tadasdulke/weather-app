import './index.scss';

interface SeparatorProps {
  text: string;
  children?: React.ReactNode;
}

const Separator = ({ text, children }: SeparatorProps) => {
  return (
    <div className="Separator__container">
      <div>{text}</div>
      {children}
    </div>
  );
};

export default Separator;
