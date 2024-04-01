import styled from 'styled-components'

export const MainButton = styled.button`
  padding: 12px;
  outline: none;
  border-radius: 30px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.red_500};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  cursor: pointer;
`
