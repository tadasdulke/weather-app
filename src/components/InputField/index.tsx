import './index.scss';

import Button from '~components/Button';
import CancelCrossIcon from '~images/cancel-cross.svg';
import SearchIcon from '~images/search-icon.svg';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear: React.MouseEventHandler<HTMLButtonElement>;
}

const InputField = ({ onClear, value, onChange }: InputFieldProps) => {
  return (
    <div className="InputField__container">
      <div className="InputField__icon">
        <SearchIcon />
      </div>
      <input
        value={value}
        onChange={onChange}
        className="InputField__input"
        type="text"
      />
      <Button onClick={onClear} className="InputField__button">
        <CancelCrossIcon />
      </Button>
    </div>
  );
};

export default InputField;
