import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Box>
        <S.Item onClick={() => navigate('/')}>🎨</S.Item>
        <S.Item onClick={() => navigate('/todo')}>📄</S.Item>
      </S.Box>
    </S.Wrapper>
  )
}

export default Menu