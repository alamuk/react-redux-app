# Redux 
redux is a library for managing the state using the same techniques as useReducer.
[redux library](https://redux.js.org/introduction/getting-started)

important words: 
- action, 
- dispatch function,
- reducer
- state
#### any time we change our state anyway - we have to call `dispatch function`
state change — we have call `dispatch` - 
we can find anything changes in our state by asking—why state is updating and what component is triggering the update
one central point of change - dispatch function - it helps us for debugging feature. 

## action object = it has a type and sole purpose of that type.


[Project to see](https://codesandbox.io/p/sandbox/rtk-forked-v5vwd7)


### we need an array = []
### need map function for adding and removing item as it will create a new array of the item. 
### we will have a one-state place for all the states [] array
each state will be managed by different Reducer one for one - separate reducer

## Add Item: 
------------
- we need event handler function for Adding item

## Delete Item: 
------------
- we need event handler function for Delete item


## Reset Button:
------------
- we need event handler function for Reset item
-------------

Redux: 
we crete 2 things 
------------
# 1. Store: 
------------
- this is an object that will hold all our states. 
- we usually don't have to interact with store directly. the redux library will handle it. 
- this will be created by configureStore({}) where we put one reducer which will hold all the reducers inside.
- to see what hold in the store: `console.log(store.getState());`
- one application holds one store.
- to understand the dispatch of the store 
TO Dispatch an action: `store.dispatch({ type: 'songs/addSong'})` for debugging. 

to read the file in console.log(); we can use `JSON.stringify()` to make the data more readable
 

for the test, that store is working or not: 
```javascript
// console.log(JSON.stringify(store.getState()));
const startingState = store.getState();
console.log(JSON.stringify(startingState));
```

for testing the store state change, we can use: 
the dispatch here will change the store.

```javascript
store.dispatch({
    type: 'song/addSong',  /// we have to becare full we will need to write exact name and method name here. 
    payload: 'New Song',
});
```

### one reducer for slice which specifically maintains that slice/array
### `key` of the reducer specially created when will create the store for the Slice. 
### and the `Value` will come from the `that reducer` which done by dispatch function.
--------------
# 2. Slice: 
-------------
- `slice` is an `object` created by `createSlice() function`
- by calling `createSlice({})`
- the slice is going to automatically create some different `reducers` in our store along with `action types` that we going to use as well. 
- Slice creates `acttion and reducer for us`. 
-----------------------------------------------------------------------------
three things slice does for us: 
`a`- it defines some initial state.
`b`- combines many `mini reducers` in to a `big reducer`
`c`- creates a set of `action creator` function. 
----------------------------
`a`-  initial state.
--------------------
- initial state could be anything's, object, array, string, number or object nested array = { song: []}
- this will show when the state starts on. 

`b`- combines many `mini reducers` in to a `big reducer`
-------------------------------------------------------
- whenever reducer runs, it is saying why I am running. 
- slice helps us have to write out a lot of Boilerplate from having to write out all the different action types.
- in the slice: we have three things:
- 1. name of the slice: name: 'song',
- 2. initialState: anything we want to show in this part when app running 
- 3. reducers: {} object, 
where we show all the methods for this song state to change/update. 
if dispatch changes this payload, the state of the song will be changed. 
```
reducers: {
    addSong(state, action){
       state.push(action.payload) 
    }
}
```
this mini reducers goes to `Store big reducer object` and uses the `key` name and `slice` with `reduce function` 
which can be view a big mega reducer. this reducer wrap up all the individual function we write in the slice. 
``` songs: songSlice.reducer,```


- `methods` in the slice is an `individual cases`—it is the answer why it will run.  
- each method will contain a very particular update and it is precise. 
- inside each of these different reducer functions, we are going to make one very particular state update. 
- but we can change multiple properties.
- it allows muting the state directly in the reducers. and each of the functions / methods is applying out state update. 

`c`- creates a set of `action creator` function.
------------------------------------------------
- action type: action creator `method type`
- how to run the specific action. it is called action creator. like -  type: song/addSong` // 'song' + '/' + 'addSong' // =   `'name'` + `'/'` + `'addSong'` //
- there is a tool that creates this `action type` for dispatch which is called `Action Creator`.
- `Action Creator` function we create for helping us not to write out this action object and not to memorize this action name. 
- this is created automatically, and when we called, it will return an action that we can dispatch. 
`console.log(songSlice.actions.addSong());`
`actions` here with slice is `not the same` function which is in the reducers addSong() method. 

- `reducers: {
  addSong(state, action){
  state.push(action.payload)
  }
  }`

- the `actions` with `s` is completely different function which helps us find the type object for dispatch.
- this `actions` we can call it = action creator.  
- the pattern with be: - 
- `nameSlice.actions.method()`
- name of the slice.actions.method() we want to run.
- and `inside` the `method` we will put `payload value` as `argument`
- songsSlice.action.addSong('Some Songs added')
  `console.log(songSlice.actions.addSong('Some song added'));`
- ----------------
how we will use this: 
--------------------
- instead this 
``` 
store.dispatch({
type: 'song/addSong',
payload: 'New Song',
});
```
  we will use this. 
  `store.dispatch(songSlice.actions.addSong('hello song'));`

actions = here creates an action object for us. and that's all. 
-------------------------------------------------------------------



# Summary of Redux: 

#### A - Store 
------
1. store is a global store for all the slice's reducers
2. which holds all the state changes and produces to show in the client site.
3. it is created by `configureStore()` which holds all the slice's reducer with `key: slice.reducer`
4. key: value of the slice. which attaches `reducer` function with it

#### B - Slice 
------
//  reducer: 
1. createSlice/ slice is a `class`. where we make all the `properties and methods` needed in this `slice`. 
2. and in the method, we show what will be changed in and how it will be changed. 
3. which holds: name, initial values and reducers: where all the methods show up. 
4. method can be used for changing the property values—could be single or multiple properties change. 
5. method holds: this slice `state object` and `action function` an `argument`. and work with those to change the state. 
6. `addSong: (state, action) => {
   state.push(action.payload);
   },`
7. it holds: all the `logic` and `functions` for `state and payload` 
8. the `method` doesn't show any `return`. it just runs the code inside. `no return needed`
9. `state` mention here is a piece of that slice which managed by that specific slice. // `not the whole state which is in store` 

#### C dispatch 
------
// useDispatch()
1. dispatch function will make that particular state update by making `what` will be updated = `type`
2. and what `new things` will be included = `payload`                                                                      
3. `type` holds: slice `name` property of the slice. and/ followed by  `method` for update that state. `type: song/addSong` // 'song' + '/' + 'addSong' // =   `'name'` + `'/'` + `'addSong'` //
4.`payload` holds: what will update- `payload: 'New Song',` - new song string added here for this state. 

#### d - actions 
Action creator = actions
- the `actions` with `s` is completely different function which helps us find the type object for dispatch.
- this `actions` we can call it = action creator.
- the pattern with be: -
- `nameSlice.actions.method()`
- name of the slice.actions.method() we want to run.
- and `inside` the `method` we will put `payload value` as `argument`
- songsSlice.action.addSong('Some Songs added')
  `console.log(songSlice.actions.addSong('Some song added'));`
- actions object is whole slice of that. 
`{ name: 'song',
  initialState: [],
  reducers: {
  addSong: (state, action) => {
  state.push(action.payload);
  },
  removeSong: (state, action) => {},
} }`

we can export from here by
`export const { addSong } = songSlice.actions;`

#### e - connecting redux store and react
-----------------------------------------
- redux is a library 
- react is a library 
- react-redux is another library 
`react-redux` helps us to connect `react` with `redux` library.  and play together nicely. 

steps of connecting react to redux: need to once per project. 
1. Exporting the `store` from whatever file it is created in it. 
2. Import the `store` into the root = `index.js`/or/ `main.js` file
3. import `Provider` from the `react-redux` library = `index.js`/or/ `main.js` file
4. `wrap` the `App` component with the `Provider` and `pass` the `store` into the `Provider` in the = `index.js`/or/ `main.js` file


### How to add item in redux store:

event and event handler function.

### 6 steps to change the state:  
-------------------------------
1. Add a `reducer` to one of the `slices` that changes the state in some particular way. 
2. Export the `action creator` - `actions` that slice automatically creates
   `export const { addSong } = songSlice.actions;`
3. Find the `component` that we want to `dispatch from` 
4. Import the `action creator function` and `useDispatch` from `react-redux`
`import { useDispatch } from 'react-redux';
 import { addSong } from '../store/index.js';
` // use this in the function
5. Call the `'useDispatch'` hook to get access to the dispatch function.
 ` const dispatch = useDispatch();`
6. When the user does something, call the `action creator= actions` to get an action, then dispatch it. 
//`const action = addSong(song);
// dispatch(action);`
we will write this way: 
`dispatch(addSong(song))`
use this in the event handler function. 


### How to access to the state with this data: 
----------------------------------------------
1. find the component that needs to access some state 
2. Import the `useSelector` hook from `react-redux`
   `import { useSelector } from 'react-redux';`
3. Call the hook, passing in a selector function
`const songPlaylist = [];`
we want to put our changes on this array. 
we are going to `replace` the `empty array` with `useSelection` hook. 
we will pass a callback() function as an argument.
in the callback() we will pass the `whole state` in the store for this slice `state`. 
from here we will `return` `part of the state that component care about` 
example: 
from song Component: 
`
const songPlaylist = useSlector((state)=> {
return state.songs   
})
`
state.keyName in the store reducer.  `return state.songs`

4. Use the state! Anytime state changes, the component will automatically render.  



### state confusion:
--------------------
#### inside the slice: reducer: 
- `state` means only the array on that state.
- like for songSlice --- 
- song: [`state`] array inside just that array space for it.
- console.log(state.length); to check this. 

#### outside the slice: 
-`state` means whole redux store `state`. entire redux store. 


### crucial important part of that: 
1. Accessing State 
2. changing the State 


Debugging purpose:
// 
// console.log(JSON.stringify(store.getState()));
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));
// console.log(songSlice.actions.addSong());
// console.log(songSlice.actions.addSong('Some song added'));
// store.dispatch(songSlice.actions.addSong('hello song'));