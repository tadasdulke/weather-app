import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '~pages/Homepage';
import BaseLayout from '~layouts/BaseLayout';
import Link from '~components/Link';
import CloudIcon from '~images/cloud-icon.svg';
import SettingsIcon from '~images/settings-icon.svg';
import LocationPicker from '~pages/LocationPicker';

export enum Routes {
  Homepage = '/',
  SelectLocation = '/select-location',
}

const router = createBrowserRouter([
  {
    element: (
      <BaseLayout
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
    element: <BaseLayout left={<Link to={Routes.Homepage}>Done</Link>} />,
    children: [
      {
        path: Routes.SelectLocation,
        element: <LocationPicker />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
