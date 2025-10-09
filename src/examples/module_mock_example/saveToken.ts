import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Error saving token:', error);
  }
};
