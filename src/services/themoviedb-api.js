import Notiflix from 'notiflix';
import axios from 'axios';

export async function fetchData(LAST_URL, page = 1, query = '') {
  try {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = 'a1d23687457ad2294666771e745dbcef';
    let URL = BASE_URL + LAST_URL + `?api_key=${API_KEY}`;

    if (query) {
      URL = URL + `&query=${query.trim()}`;
    }
    if (page) {
      URL = URL + `&page=${page}`;
    }
    const responce = await axios.get(URL);
    return responce;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
