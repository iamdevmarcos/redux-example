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

export const RightSide = styled.div`
  flex: 1;
  min-height: 100vh;

  background:red;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: blue;
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;

`

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: 0;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;    
  }
`
