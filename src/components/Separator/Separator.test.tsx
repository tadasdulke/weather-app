import { render, screen } from '@testing-library/react';

import Separator from '.';

describe('Separator', () => {
  test('should render', async () => {
    const props = {
      text: 'text',
      children: 'children',
    };

    render(<Separator {...props} />);

    expect(screen.getByText(props.text)).toBeInTheDocument();
    expect(screen.getByText(props.children)).toBeInTheDocument();
  });
});
