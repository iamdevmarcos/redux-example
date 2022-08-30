import * as S from './styles'

import { useAppSelector } from 'redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { switchTheme } from 'redux/reducers/themeReducer'

const ThemeExample = () => {
  const { theme } = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  const handleSwitchTheme = () => dispatch(switchTheme()) 

  return (
    <S.Wrapper>
      <S.Box>
        <S.Heading>Tema Atual: {theme.mode}</S.Heading><br/>
        <S.Text>Apresentacao A-Team</S.Text>
        <S.InfoBox>
          <S.Text>Tema: Redux</S.Text>
        </S.InfoBox>

        <S.Button onClick={handleSwitchTheme}>Mudar Tema</S.Button>
      </S.Box>
    </S.Wrapper>
    
  )
}

export default ThemeExample