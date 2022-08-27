import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftSide = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    color: ${theme.colors.textColor};
    min-height: 100vh;
  `}
`

export const RightSide = styled.div`
  flex: 1;
  min-height: 100vh;
`

export const Heading = styled.h1``

export const List = styled.ul``

type ListItemProps = {
  done: boolean
}

export const ListItem = styled.li<ListItemProps>`
  text-decoration: ${({ done })=> done ? 'line-through' : 'normal'};
  cursor: pointer;
  margin-bottom: 20px;
  list-style: none;
  width: max-content;

  span {
    font-weight: bold;
  }
`

export const FormArea = styled.div``

export const Input = styled.input``

export const Button = styled.button``
