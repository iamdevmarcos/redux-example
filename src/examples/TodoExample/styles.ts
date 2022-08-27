import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 730px) {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    color: ${theme.colors.textColor};
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  `}
`

export const Box = styled.div`
  padding: 20px;
`

export const Heading = styled.h1`
  margin-bottom: 30px;
`

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
  padding: 10px 10px 10px 0px;

  span {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const RightSide = styled.div`
  flex: 1;
  width: 100%;
  min-height: 100vh;

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
  gap: 15px;
`

export const Input = styled.input`
  width: 90%;
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
  border-radius: 5px;
  cursor: pointer;
  background: #000;
  color: #fff;
  font-weight: bold;
  
  &:hover {
    opacity: 0.7;    
  }
`
