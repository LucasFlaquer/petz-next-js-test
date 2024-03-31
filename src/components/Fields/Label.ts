import styled from 'styled-components'

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: ${({ theme }) => theme.fontSize.xsm}px;
  font-weight: 700;
`
