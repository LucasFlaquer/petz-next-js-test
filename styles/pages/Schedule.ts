import styled from 'styled-components'
import { MainButton } from '../../src/components/MainButton'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.div`
  flex: 1;
  padding-top: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
  height: 100%;
`

export const ConfirmationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.red_300};
  border-radius: 8px;

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray_100};
    max-width: 350px;
  }

  ${MainButton} {
    margin-bottom: 2rem;
  }
`
