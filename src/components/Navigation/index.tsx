import './index.scss';

export interface NavigationProps {
  right?: JSX.Element;
  left?: JSX.Element;
}

const Navigation = ({ right, left }: NavigationProps) => {
  return (
    <nav className="Navigation__container">
      <div className="Navigation__left">{left}</div>
      <div className="Navigation__center">
        {/* change to h1 and h2 */}
        <p>Location</p>
        <p>Location</p>
      </div>
      <div>{right}</div>
    </nav>
  );
};

export default Navigation;
