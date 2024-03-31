import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`
export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(213, 213, 213, 1);
  outline: none;
  height: 45px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_50};
  }
`
