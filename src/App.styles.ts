import styled, { css } from "styled-components"

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.textColor};
  `}
`

export const Heading = styled.h1``