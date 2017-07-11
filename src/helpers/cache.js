import { AsyncStorage } from 'react-native';

export async function cacheMovies(movies) {
  try {
    await AsyncStorage.setItem('@moviesStore:movies', JSON.stringify(movies));
  } catch (err) {
    console.error(err.message);
  }
}

export async function getCachedMovies() {
  try {
    return await AsyncStorage.getItem('@moviesStore:movies');
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
