import { useAppSelector } from 'redux/hooks/useAppSelector'
import * as S from './styles'

const TodoExample = () => {
  const todoList = useAppSelector((state) => state.todo)

  return (
    <S.Box>
      <S.Heading>Lista de Tarefas</S.Heading>
      <S.List>
        {todoList.map(({ title, description, done }, index) => {
          const isCompleted = done ? '✅' : '❌'

          return (
            <S.ListItem key={index} done={done}>
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