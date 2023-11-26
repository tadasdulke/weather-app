import './index.scss';

export interface NavigationProps {
  right?: React.ReactNode;
  left?: React.ReactNode;
  location: string;
  pagename: string;
}

const Navigation = ({ right, left, location, pagename }: NavigationProps) => {
  return (
    <nav className="Navigation__container">
      <div className="Navigation__item Navigation__item--left">{left}</div>
      <div className="Navigation__item Navigation__item--center Navigation__text-container">
        <h1 className="Navigation__text Navigation__text--white">{pagename}</h1>
        <h2 className="Navigation__text Navigation__text--darker">
          {location}
        </h2>
      </div>
      <div className="Navigation__item Navigation__item--right">{right}</div>
    </nav>
  );
};

export default Navigation;
