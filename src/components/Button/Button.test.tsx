import { render, screen } from '@testing-library/react';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<div>test</div>);
  const submitButton = screen.queryByText('submit');
  expect(submitButton).not.toBeInTheDocument();
});
