import { createSlice } from "@reduxjs/toolkit"

import { DefaultTheme } from "styled-components"
import { darkTheme, lightTheme } from "styles/theme"

type ThemeState = {
  theme: DefaultTheme
}

const initialState = { theme: darkTheme } as ThemeState

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme = state.theme.mode === 'dark' ? lightTheme : darkTheme
    }
  }
})

export const { switchTheme } = slice.actions
export default slice.reducer