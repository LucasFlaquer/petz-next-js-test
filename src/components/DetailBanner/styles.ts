import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 6.625rem 3.75rem;
  background-color: ${({ theme }) => theme.colors.red_500};

  ul {
    padding: 0;
    display: flex;
    gap: 1rem;
    list-style: none;
    margin-bottom: 12px;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 12px;
      &:not(:first-child) {
        /* position: relative; */

        &:before {
          /* position: absolute; */
          content: '>';
          color: ${({ theme }) => theme.colors.white};
          font-weight: 300;
        }
      }
      a {
        text-decoration: none;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 12px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
  }
`
// export const Content =
