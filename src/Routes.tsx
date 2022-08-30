import { Route, Routes } from 'react-router-dom'

import ThemeExample from 'examples/ThemeExample'
import TodoExample from 'examples/TodoExample'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ThemeExample />} />
      <Route path="/todo" element={<TodoExample />} />
      <Route path="*" element={<h1>Not Found...</h1>} />
    </Routes>
  )
}