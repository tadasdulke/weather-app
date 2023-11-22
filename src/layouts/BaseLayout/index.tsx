import Navigation, { type NavigationProps } from '~components/Navigation';
import { Outlet } from 'react-router-dom';
import useLocationContext from '~hooks/useLocationContext';

import './index.scss';

interface BaseLayoutProps extends Partial<NavigationProps> {}

const BaseLayout = ({ left, right }: BaseLayoutProps) => {
  const { location } = useLocationContext();

  return (
    <div className="BaseLayout__container">
      <header>
        <Navigation location={location.name} left={left} right={right} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
