import { render, screen } from '@testing-library/react';
import { Outlet } from 'react-router-dom';

import useLocationContext from '~hooks/useLocationContext';

import BaseLayout from '.';

jest.mock('react-router-dom');
jest.mock('~hooks/useLocationContext');

describe('BaseLayout', () => {
  test('should render', async () => {
    const props = {
      left: 'left',
      right: 'right',
      pagename: 'pagename',
    };

    const outletText = 'outlet';
    const locationName = 'location';

    (Outlet as jest.Mock).mockReturnValue(outletText);
    (useLocationContext as jest.Mock).mockReturnValue({
      location: { name: locationName },
    });

    render(<BaseLayout {...props} />);

    expect(screen.getByText(props.left)).toBeInTheDocument();
    expect(screen.getByText(props.right)).toBeInTheDocument();
    expect(screen.getByText(props.pagename)).toBeInTheDocument();
    expect(screen.getByText(outletText)).toBeInTheDocument();
    expect(screen.getByText(locationName)).toBeInTheDocument();
  });
});
