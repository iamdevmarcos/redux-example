import { useAppSelector } from "redux/hooks/useAppSelector"
import { ThemeProvider } from "styled-components"

type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  const { theme } = useAppSelector((state) => state.theme)

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Wrapper