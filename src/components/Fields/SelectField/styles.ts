import styled, { css } from 'styled-components'
import { Label } from '../Label'

interface StyleProps {
  $variant: 'inline' | 'default'
}

export const Container = styled.div<StyleProps>`
  flex: 1;
  margin-bottom: 1rem;
  position: relative;
  > span {
    font-size: ${({ theme }) => theme.fontSize.xsm}px;
    color: ${({ theme }) => theme.colors.red_500};
    position: absolute;
    bottom: -1rem;
    left: 0;
  }

  ${({ $variant }) =>
    $variant === 'inline' &&
    css`
      display: flex;
      align-items: center;
      gap: 2rem;

      .custom-react-select {
        flex: 1;
        margin-top: 0;
      }
      ${Label} {
        margin-bottom: 0;
      }
      > span {
        right: 0;
        left: unset;
      }
    `}

  .custom-react-select {
    margin-top: 0.5rem;

    > div[class*='control'] {
      border-radius: 8px;
      height: 45px;
    }
    [class*='ValueContainer'] {
      padding: 0.5rem;
    }
  }
  span[class*='indicatorSeparator'] {
    display: none;
  }
`
