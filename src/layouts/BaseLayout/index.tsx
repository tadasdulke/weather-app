import Navigation, { NavigationProps } from "~components/Navigation";
import { Outlet } from "react-router-dom";

import "./index.scss";

interface BaseLayoutProps extends NavigationProps {}

const BaseLayout = ({ left, right }: BaseLayoutProps) => {
  return (
    <div className="BaseLayout__container">
      <header>
        <Navigation left={left} right={right} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
