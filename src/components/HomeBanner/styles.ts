import styled from 'styled-components';
import BannerImage from '../../../public/images/pokemon-hero.jpg'

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BannerImage.src});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray_100};
  }
  
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xl}px;
    font-weight: 700;
    z-index: 0;
  }
`