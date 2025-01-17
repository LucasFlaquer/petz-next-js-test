import Image from 'next/image'
import * as S from './styles'
import PokeballIcon from '../../../public/images/white-pokeball.svg'

interface Props {
  homeActive?: boolean
}

export function Header({ homeActive = false }: Props) {
  return (
    <S.Container>
      <S.HomeLink href={'/'} data-expanded={homeActive} data-testid="homeLink">
        <Image src={PokeballIcon} alt="pokeball" width={37} height={37} />
        <span>Centro Pokémon</span>
      </S.HomeLink>
      <S.Navigation>
        <S.OutlineLink href={'/quem-somos'}>Quem somos</S.OutlineLink>
        <S.ScheduleLink href={'/agendar-consulta'}>
          Agendar Consulta
        </S.ScheduleLink>
      </S.Navigation>
    </S.Container>
  )
}
