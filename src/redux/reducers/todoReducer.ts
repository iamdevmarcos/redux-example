import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    title: 'Apresentacao A-Team',
    description: 'Criar slides e mini-projeto para apresentacao',
    done: false
  }
]

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    insertTask: (state, action) => {
      state.push(action.payload)
    },
    toggleStatus: (state, action) => {
      for(let i in state) {
        if(state[i].id === action.payload) {
          state[i].done = !state[i].done
        }
      }
    }
  }
})

export const { insertTask, toggleStatus } = slice.actions
export default slice.reducer