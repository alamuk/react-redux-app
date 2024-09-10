import { configureStore, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },

    removeSong: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1); // splice take two arguments - index of the item, and how many will be removed.

      // action.payload === string, the song we want to remove.
      // state will be an Array of the song
      // we need to go through the Array `means-state`, find the appropriate item and remove it.
      // remove an item out of an array - when we are using `immer`,
      // redux tool kit automatically includes `immer` inside all of our `reducer` functions -
      // we are directly allowed / absolutely allowed to `mutate` the state object. so it is easier to with immer.
      // and can be done easily with splice() function

      // state.splice(state.indexOf(action.payload), 1);
    },
  },
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      console.log(action);
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
