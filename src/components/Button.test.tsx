import { fireEvent, render } from '@testing-library/react-native';
import { Button } from './Button';

describe('button component', () => {
  it('calls on Press when button is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPress} label="click me" />,
    );
    fireEvent.press(getByTestId('my-button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
