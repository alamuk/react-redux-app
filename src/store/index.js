import { configureStore, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },

    removeSong: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer, /// songs here is the key op the array. // reducer here is a function
    movies: movieSlice.reducer,
  },
});

export { store };
export const { addSong } = songSlice.actions;
export const { removeSong } = songSlice.actions;
export const { addMovie } = movieSlice.actions;
export const { removeMovie } = movieSlice.actions;
