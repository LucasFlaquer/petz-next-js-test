import Image from 'next/image'
import * as S from './styles'
import PokeballIcon from '../../../public/images/white-pokeball.svg'

export function Header() {
  return (
    <S.Container>
      <S.HomeLink href={'#'}>
        <Image src={PokeballIcon} alt='pokeball' width={37} height={37} />
        <span>Centro Pokémon</span>
      </S.HomeLink>
    </S.Container>
  )
}