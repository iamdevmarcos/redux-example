import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.textColor};
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Box = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`

export const Heading = styled.h1``

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    margin-bottom: 20px;
  `}
`

export const InfoBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.textColor};
    max-width: 500px;
    height: 300px;
    margin: 0 auto;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
    margin-bottom: 30px;

    ${Text} {
      font-size: 40px;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    outline: 0;
    padding: 10px 20px;
    background-color: ${theme.colors.textColor};
    color: ${theme.colors.background};
    cursor: pointer;
    border-radius: 5px;
  `}
`