import Link from 'next/link'

import * as S from './styles'

interface Props {
  title: string
  description: string
}

export function DetailBanner({ title, description }: Props) {
  return (
    <S.Container>
      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Quem Somos</Link>
        </li>
      </ul>
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Container>
  )
}
