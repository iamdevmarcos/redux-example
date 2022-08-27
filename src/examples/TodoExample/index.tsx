import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/hooks/useAppSelector'
import { toggleStatus } from 'redux/reducers/todoReducer'
import * as S from './styles'

const TodoExample = () => {
  const todoList = useAppSelector((state) => state.todo)
  const dispatch = useDispatch()

  const handleToggleStatus = (id: number) => dispatch(toggleStatus(id))

  return (
    <S.Box>
      <S.Heading>Lista de Tarefas</S.Heading>
      <S.List>
        {todoList.map(({ id, title, description, done }) => {
          const isCompleted = done ? '✅' : '❌'

          return (
            <S.ListItem
              key={id}
              done={done}
              onClick={() => handleToggleStatus(id)}
            >
              Titulo: {title}
              Descricao: {description}
              Status: {isCompleted}
            </S.ListItem>
          )
        })}
      </S.List>
    </S.Box>
  )
}

export default TodoExample