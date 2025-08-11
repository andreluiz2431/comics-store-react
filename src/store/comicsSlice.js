import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComics as fetchComicsApi, fetchComicById as fetchComicByIdApi } from '../services/marvelApi';

const initialState = {
  comicsList: [],
  selectedComic: null,
  status: 'idle',
  error: null,
  pagination: {
    offset: 0,
    limit: 20,
    total: 0,
    count: 0,
  },
};

export const fetchComics = createAsyncThunk(
  'comics/fetchComics',
  async ({ limit, offset, searchTerm, filterType }, { rejectWithValue }) => {
    try {
      const response = await fetchComicsApi(limit, offset, searchTerm);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchComicById = createAsyncThunk(
  'comics/fetchComicById',
  async (comicId, { rejectWithValue }) => {
    try {
      const response = await fetchComicByIdApi(comicId);
      return response.data.data.results[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        let comics = action.payload.results.map(comic => ({
          ...comic,
          isRare: Math.random() < 0.1
        }));

        const filterType = action.meta.arg.filterType;
        if (filterType === 'rare') {
          comics = comics.filter(comic => comic.isRare);
        } else if (filterType === 'normal') {
          comics = comics.filter(comic => !comic.isRare);
        }

        state.comicsList = comics;
        state.pagination = {
          offset: action.payload.offset,
          limit: action.payload.limit,
          total: action.payload.total,
          count: action.payload.count,
        };
      })
      .addCase(fetchComics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch comics';
      })
      .addCase(fetchComicById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComicById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedComic = action.payload;
      })
      .addCase(fetchComicById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch comic details';
      });
  },
});

export default comicsSlice.reducer;
