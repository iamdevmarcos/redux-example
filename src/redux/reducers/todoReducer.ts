import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    title: 'Apresentacao A-Team',
    description: 'Criar slides e mini-projeto para apresentacao',
    done: true
  }
]

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    insertTask: (state, payload) => {
      console.log(payload)
      return state
    }
  }
})

export const { insertTask } = slice.actions
export default slice.reducer