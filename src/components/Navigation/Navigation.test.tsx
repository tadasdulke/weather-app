import { render, screen } from '@testing-library/react';

import Navigation from '.';

describe('Navigation', () => {
  test('should render', async () => {
    const props = {
      right: 'right',
      left: 'left',
      location: 'location',
      pagename: 'pagename',
    };

    render(<Navigation {...props} />);

    expect(screen.getByText(props.right)).toBeInTheDocument();
    expect(screen.getByText(props.left)).toBeInTheDocument();
    expect(screen.getByText(props.location)).toBeInTheDocument();
    expect(screen.getByText(props.location)).toBeInTheDocument();
  });
});
