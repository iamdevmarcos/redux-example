import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: 'light'
}

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeStatus: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setThemeStatus } = slice.actions
export default slice.reducer