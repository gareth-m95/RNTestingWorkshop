import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveToken } from './saveToken';

// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock')
// );

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => 'abc1234'),
}));

test('saveToken', async () => {
  jest.spyOn(AsyncStorage, 'setItem');
  await saveToken('abc123');
  expect(AsyncStorage.setItem).toHaveBeenCalledWith('token', 'abc123');
});
