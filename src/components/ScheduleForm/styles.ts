import styled from 'styled-components'

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;

  h2 {
    margin-bottom: 2rem;
  }
`

export const FieldGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  * > {
    flex: 1;
  }
`
export const TeamSection = styled.div`
  > span {
    display: block;
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xsm}px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_50};
  }
`
export const TeamList = styled.div`
  margin-top: 1rem;
`

export const TeamListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 50px;
  background-color: transparent;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray_500};
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  outline: none;
  cursor: pointer;
  margin-bottom: 2rem;

  transition:
    color,
    background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_50};
    color: ${({ theme }) => theme.colors.gray_100};
  }

  span {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.sm};

    &:last-child {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`
