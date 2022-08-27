import { useAppSelector } from "redux/hooks/useAppSelector"
import { ThemeProvider } from "styled-components"
import * as S from './styles'

type ThemeWrapperProps = {
  children: React.ReactNode
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme } = useAppSelector((state) => state.theme)

  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>{children}</S.Wrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper