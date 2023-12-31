import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import Link from '~common/Link';
import CloudIcon from '~images/cloud-icon.svg';
import SettingsIcon from '~images/settings-icon.svg';
import BaseLayout from '~layouts/BaseLayout';
import Homepage from '~pages/Homepage';
import LocationPicker from '~pages/LocationPicker';

export enum Routes {
  Homepage = '/',
  SelectLocation = '/select-location',
}

const router = createBrowserRouter([
  {
    element: (
      <BaseLayout
        pagename="Weather Forecast"
        left={
          <Link to={Routes.SelectLocation}>
            <CloudIcon width={50} height={50} />
          </Link>
        }
        right={
          <Link to={Routes.SelectLocation}>
            <SettingsIcon width={50} height={50} />
          </Link>
        }
      />
    ),
    children: [
      {
        path: Routes.Homepage,
        element: <Homepage />,
      },
    ],
  },
  {
    element: (
      <BaseLayout
        pagename="Location"
        left={<Link to={Routes.Homepage}>Done</Link>}
      />
    ),
    children: [
      {
        path: Routes.SelectLocation,
        element: <LocationPicker />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Routes.Homepage} replace />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
