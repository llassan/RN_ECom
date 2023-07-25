import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFavourite: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    add: (state, action) => {
      state.isFavourite.push(action.payload);
      console.log("Add Fav", state.isFavourite);
    },
    remove: (state, action) => {
      const newFavs = state.isFavourite.filter(
        (item) => item.id != action.payload.id
      );
      state.isFavourite = newFavs;
      console.log("Remove Fav", state.isFavourite);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = favouriteSlice.actions;

export default favouriteSlice.reducer;
