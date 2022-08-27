import * as S from './styles'

import { useAppSelector } from 'redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { switchTheme } from 'redux/reducers/themeReducer'

const ThemeExample = () => {
  const { theme } = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  const handleSwitchTheme = () => dispatch(switchTheme()) 

  return (
    <S.Box>
      <S.Heading>Tema Atual: {theme.mode} <button onClick={handleSwitchTheme}>Mudar Tema</button></S.Heading>
      
    </S.Box>
  )
}

export default ThemeExample