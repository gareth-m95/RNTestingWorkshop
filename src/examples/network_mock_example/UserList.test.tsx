import { render, waitFor } from '@testing-library/react-native';
import { UserList } from './UserList';

global.fetch = jest.fn();

describe('UserList', () => {
  it('fetch and displays users successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, firstName: 'Gareth' },
        { id: 2, firstName: 'Michael' },
      ],
    });
    const { queryByTestId, getByText } = render(<UserList />);

    expect(queryByTestId('loading')).toBeTruthy();

    await waitFor(() => expect(getByText('Gareth')).toBeTruthy());
    expect(getByText('Michael')).toBeTruthy();
  });

  it('handles fetch error', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const { queryByTestId } = render(<UserList />);

    await waitFor(() => expect(queryByTestId('error')).toBeTruthy());
  });
});
