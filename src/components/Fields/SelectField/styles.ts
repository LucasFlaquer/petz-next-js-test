import styled, { css } from 'styled-components'
import { Label } from '../Label'

interface StyleProps {
  $variant: 'inline' | 'default'
}

export const Container = styled.div<StyleProps>`
  flex: 1;
  margin-bottom: 1rem;
  ${({ $variant }) =>
    $variant === 'inline' &&
    css`
      display: flex;
      align-items: center;
      gap: 2rem;

      .custom-react-select {
        flex: 1;
      }
      ${Label} {
        margin-bottom: 0;
      }
      /* flex-direction */
    `}
  ${Label}
  .custom-react-select {
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
