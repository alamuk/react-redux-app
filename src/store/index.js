import { configureStore, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },

    removeSong: (state, action) => {},
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer, /// songs here is the key op the array. // reducer here is a function
    // movies: movieSlice.reducer,
  },
});

export { store };

// store.dispatch(songSlice.actions.addSong('hello song'));

// const movieSlice = createSlice({
//   name: 'movie',
//   initialState: [],
//   reducers: {
//     addMovie: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// store.dispatch({
//   type: 'song/addSong',
//   payload: 'New Song',
// });

// store.dispatch({
//   type: 'movie/addMovie',
//   payload: 'New Movie',
// });
