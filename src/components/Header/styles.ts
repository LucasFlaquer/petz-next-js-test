import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.25rem 5.188rem;
  background-color: #dddedd;
`

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 50px;
  background-color: rgba(228, 15, 15, 1);
  text-decoration: none;
  transition: all .3s ease;
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
`