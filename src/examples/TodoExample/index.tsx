import * as S from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/hooks/useAppSelector'
import { insertTask, toggleStatus } from 'redux/reducers/todoReducer'

const TodoExample = () => {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const todoList = useAppSelector((state) => state.todo)
  const dispatch = useDispatch()

  const handleToggleStatus = (id: number) => dispatch(toggleStatus(id))

  const handleSubmit = () => {
    if(taskName && taskDescription) {
      const newTask = {
        id: todoList.length + 1,
        title: taskName,
        description: taskDescription,
        done: false
      }

      dispatch(insertTask(newTask))

      // reset input values
      setTaskName('')
      setTaskDescription('')
    } else {
      alert('Preencha os campos!')
    }
  }

  return (
    <S.Wrapper>
      <S.LeftSide>
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
                Titulo: <span>{title}</span>
                Descricao: <span>{description}</span>
                Status: {isCompleted}
              </S.ListItem>
            )
          })}
        </S.List>
      </S.LeftSide>

      <S.RightSide>
        <S.Heading>Adicionar nova tarefa</S.Heading>

        <S.FormArea>
          <S.Input value={taskName} onChange={e => setTaskName(e.target.value)} />
          <S.Input
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
          />
          <S.Button onClick={handleSubmit}>Cadastrar</S.Button>
        </S.FormArea>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default TodoExample