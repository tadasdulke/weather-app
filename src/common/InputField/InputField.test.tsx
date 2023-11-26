import { fireEvent, render, screen } from '@testing-library/react';

import InputField from '.';

const renderInputField = () => {
  const initialValue = 'input';
  const onClearMock = jest.fn();
  const onChangeMock = jest.fn();

  render(
    <InputField
      value={initialValue}
      onChange={onChangeMock}
      onClear={onClearMock}
    />
  );

  return {
    initialValue,
    onClearMock,
    onChangeMock,
  };
};

describe('InputField', () => {
  test('should display value', async () => {
    const { initialValue } = renderInputField();

    expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();
  });

  test('should trigger onChange on input change', async () => {
    const { initialValue, onChangeMock } = renderInputField();

    const inputField = screen.getByDisplayValue(initialValue);
    const newValue = 'newValue';
    fireEvent.change(inputField, { target: { value: newValue } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('should trigger onClear on cancel button', async () => {
    const { onClearMock } = renderInputField();

    const cancelButton = screen.getByTestId('cancel-input-button');

    fireEvent.click(cancelButton);

    expect(onClearMock).toHaveBeenCalledTimes(1);
  });
});
