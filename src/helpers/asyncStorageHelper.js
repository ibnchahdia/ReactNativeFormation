import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataToAsyncStorage = async (key, data) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromAsyncStorage = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};
