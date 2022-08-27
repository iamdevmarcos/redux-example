import { useAppSelector } from "redux/hooks/useAppSelector"
import { ThemeProvider } from "styled-components"

type ThemeWrapperProps = {
  children: React.ReactNode
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme } = useAppSelector((state) => state.theme)

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default ThemeWrapper