import AsyncStorage from '@react-native-async-storage/async-storage';

export const storePosition = async (position: number) => {
  try {
    await AsyncStorage.setItem('lastPosition', position.toString());
  } catch (error) {
    console.error('Error saving position:', error);
  }
};

export const getPosition = async (): Promise<number> => {
  try {
    const value = await AsyncStorage.getItem('lastPosition');
    return value !== null ? parseInt(value) : 0;
  } catch (error) {
    console.error('Error fetching position:', error);
    return 0;
  }
};