const TMBD_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '89a1a6500311a41b1a4c35541871e047';
const AUTH_QUERYSTRING = `?api_key=${API_KEY}`;

const CONFIGURATION_PATH = '/configuration';
const POPULAR_PATH = '/movie/popular';
const SEARCH_PATH = '/search/movie';
const GENRE_PATH = '/genre/movie/list';
const GENRE_MOVIES_PATH = (id) => `/genre/${id}/movies`;

export {
    TMBD_BASE_URL,
    API_KEY,
    AUTH_QUERYSTRING,

    CONFIGURATION_PATH,
    POPULAR_PATH,
    SEARCH_PATH,
    GENRE_PATH,
    GENRE_MOVIES_PATH
};