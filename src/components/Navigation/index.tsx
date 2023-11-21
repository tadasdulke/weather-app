import './index.scss';

export interface NavigationProps {
  right?: JSX.Element;
  left?: JSX.Element;
  location: string;
}

const Navigation = ({ right, left, location }: NavigationProps) => {
  return (
    <nav className="Navigation__container">
      <div className="Navigation__left">{left}</div>
      <div className="Navigation__center">
        {/* change to h1 and h2 */}
        <p className="Navigation__text--white">Location</p>
        <p className="Navigation__text--darker">{location}</p>
      </div>
      <div>{right}</div>
    </nav>
  );
};

export default Navigation;
