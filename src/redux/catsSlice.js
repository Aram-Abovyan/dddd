import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cats: []
}

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    addCat: (state, action) => {
      state.cats.push(action.payload)
    },
    addCats: (state, action) => {
      state.cats = action.payload
    }
  },
})

export const { addCat, addCats } = catsSlice.actions

export default catsSlice.reducer