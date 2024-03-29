import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 15px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  
  p {
    color: ${({theme}) => theme.colors.white};
  }
`