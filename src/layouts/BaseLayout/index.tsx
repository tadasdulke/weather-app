import './index.scss';

import { Outlet } from 'react-router-dom';

import ErrorBoundary from '~components/ErrorBoundary';
import Navigation from '~components/Navigation';
import useLocationContext from '~hooks/useLocationContext';

interface BaseLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  pagename: string;
}

const BaseLayout = ({ left, right, pagename }: BaseLayoutProps) => {
  const { location } = useLocationContext();

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default BaseLayout;
