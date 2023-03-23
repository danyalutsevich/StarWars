import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadState() {
    try {
        const serializedState = await AsyncStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log('Error loading state:', err);
        return undefined;
    }
};

export async function saveState(state: any) {
    try {
        const serializedState = JSON.stringify(state);
        await AsyncStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.log('Error saving state:', err);
    }
};