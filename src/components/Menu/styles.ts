import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  max-width: 980px;
  display: flex;

  height: 70px;
  position: fixed;
  bottom: 20px;

  border: 1px solid #525f6f;
  border-radius: 10px;
`

export const Item = styled.div`
  ${({ theme }) => css`
    width:50px;
    height:50px;
    background-color: ${theme.colors.textColor};
    border-radius: 8px;
    font-size: 25px;
    margin:10px 7px;
    transition: all ease 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    
    &:hover {
      width:100px;
      height:100px;
      margin-top:-40px; 
      font-size: 40px;
    }
  `}
`