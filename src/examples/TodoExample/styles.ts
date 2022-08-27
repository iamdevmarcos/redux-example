import styled, { css } from "styled-components"

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.textColor};
    min-height: 100vh;
  `}
`

export const Heading = styled.h1``

export const List = styled.ul``

type ListItemProps = {
  done: boolean
}

export const ListItem = styled.li<ListItemProps>`
  text-decoration: ${({ done })=> done ? 'line-through' : 'normal'};
  cursor: pointer;
`