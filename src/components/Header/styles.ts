import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 5.188rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const HomeLink = styled(Link)<{ 'data-expanded': boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red_500};
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  width: 61px;

  span {
    color: #fff;
    padding-left: 1rem;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 600;
  }

  &:hover {
    width: 259px;
  }

  ${(props) =>
    props['data-expanded'] &&
    css`
      width: 259px;
    `}
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const OutlineLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray_500};
  text-decoration: none;
  text-transform: capitalize;
`

export const ScheduleLink = styled(Link)`
  padding: 0.75rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red_500};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: 700;
`
