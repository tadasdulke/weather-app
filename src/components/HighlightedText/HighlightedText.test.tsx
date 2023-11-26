import { render, screen } from '@testing-library/react';

import HighlightedText from '.';

const text = 'ThisIsATest';
const highlightedClassName = 'bolded';

describe('HighlightedText', () => {
  test('should be rendered in highlighted span', async () => {
    const text = 'ThisIsATest';
    const highlightedClassName = 'bolded';

    render(
      <HighlightedText
        from={4}
        to={3}
        className="normal"
        highlightedClassName={highlightedClassName}
      >
        {text}
      </HighlightedText>
    );

    const highlightedPart = screen.getByText('IsA');
    expect(highlightedPart.className).toBe('bolded');
  });

  test('should not be rendered in highlighted span', async () => {
    render(
      <HighlightedText
        from={4}
        to={3}
        className="normal"
        highlightedClassName={highlightedClassName}
      >
        {text}
      </HighlightedText>
    );

    const prefixPart = screen.getByText(/This/);
    const postFixPart = screen.getByText(/Test/);
    expect(prefixPart.className).toBe('normal');
    expect(postFixPart.className).toBe('normal');
  });
});
