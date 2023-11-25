import './index.scss';

import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...restProps }: ButtonProps) => (
  <button className={classnames('Button', className)} {...restProps}>
    {children}
  </button>
);

export default Button;
