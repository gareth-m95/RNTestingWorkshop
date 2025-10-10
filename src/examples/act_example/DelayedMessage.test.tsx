import { render, waitFor } from '@testing-library/react-native';
import DelayedMessage from './DelayedMessage';
import { act } from 'react';

jest.useFakeTimers();

test('displays the message after a timeout', async () => {
  const { getByText } = render(<DelayedMessage />);

  act(() => jest.advanceTimersByTime(2000));

  await waitFor(() => expect(getByText('Hello!')).toBeTruthy());
});
