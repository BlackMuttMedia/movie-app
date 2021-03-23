import axios from 'axios';
import {  
    TMBD_BASE_URL, 
    AUTH_QUERYSTRING, 

    CONFIGURATION_PATH,
    POPULAR_PATH,
    SEARCH_PATH,
    GENRE_PATH,
    GENRE_MOVIES_PATH
} from './constants';

const processData = (res) => res.data;
const processError = (err) => Promise.reject(err);

const getData = (url) => axios.get(url).then(processData).catch(processError);
const getAuthData = (path, query) => getData(`${TMBD_BASE_URL}${path}${AUTH_QUERYSTRING}${query ||''}`)

const getConfiguration = () => getAuthData(CONFIGURATION_PATH)
const getPopular = () => getAuthData(POPULAR_PATH);
const getSearchResults = (query) => getAuthData(`${SEARCH_PATH}`, `&query=${encodeURIComponent(query)}`)
const getGenres = () => getAuthData(GENRE_PATH);
const getGenreMovies = (id) => getAuthData(GENRE_MOVIES_PATH(id));

export {
    getConfiguration,
    getPopular,
    getSearchResults,
    getGenres,
    getGenreMovies
};