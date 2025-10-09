import { Text } from 'react-native';
import { getUserName } from './getUserName';

export const Greeting = () => {
  const name = getUserName();
  return <Text testID="greeting">Hello, {name}!</Text>;
};
