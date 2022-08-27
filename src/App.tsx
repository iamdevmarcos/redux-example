import * as S from './App.styles'

import ThemeWrapper from 'components/Theme'
import { useAppSelector } from 'redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { switchTheme } from 'redux/reducers/themeReducer'

const App = () => {
  const { theme } = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  const handleSwitchTheme = () => dispatch(switchTheme()) 

  return (
    <ThemeWrapper>
      <S.Box>
        <S.Heading>Tema Atual: {theme.mode} <button onClick={handleSwitchTheme}>Mudar Tema</button></S.Heading>
        
      </S.Box>
    </ThemeWrapper>
  )
}

export default App