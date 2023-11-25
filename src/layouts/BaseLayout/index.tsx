import './index.scss';

import { Outlet } from 'react-router-dom';

import Navigation from '~components/Navigation';
import useLocationContext from '~hooks/useLocationContext';

interface BaseLayoutProps {
  left?: JSX.Element;
  right?: JSX.Element;
  pagename: string;
}

const BaseLayout = ({ left, right, pagename }: BaseLayoutProps) => {
  const { location } = useLocationContext();

  return (
    <div className="BaseLayout__container">
      <header>
        <Navigation
          location={location.name}
          left={left}
          right={right}
          pagename={pagename}
        />
      </header>
      <main className="BaseLayout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
