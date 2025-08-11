import axios from 'axios';
import md5 from 'md5';

const API_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const TS = 1;
const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

const marvelApi = axios.create({
  baseURL: API_URL,
  params: {
    apikey: PUBLIC_KEY,
    ts: TS,
    hash: HASH,
  },
});

export const fetchComics = (limit = 20, offset = 0, searchTerm) => {
  const params = {
    limit,
    offset,
  };
  if (searchTerm) {
    params.titleStartsWith = searchTerm;
  }
  return marvelApi.get('/comics', {
    params,
  });
};

export const fetchComicById = (comicId) => {
  return marvelApi.get(`/comics/${comicId}`);
};

export default marvelApi;
