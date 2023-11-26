import { render, screen } from '@testing-library/react';

import Button from '.';

const buttonText = 'text';

describe('Button', () => {
  test('should render', async () => {
    render(<Button>{buttonText}</Button>);

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test('should append additonal classname', () => {
    const additionalClassName = 'Additional__element';

    render(<Button className={additionalClassName}>{buttonText}</Button>);
    const button = screen.getByText(buttonText);

    expect(button.className).toBe(`Button ${additionalClassName}`);
  });
});
