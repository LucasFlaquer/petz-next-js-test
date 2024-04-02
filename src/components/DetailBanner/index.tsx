import Link from 'next/link'

import * as S from './styles'

interface Props {
  title: string
  description: string
  breadcrumbs: { url: string; name: string }[]
}

export function DetailBanner({ title, description, breadcrumbs }: Props) {
  return (
    <S.Container>
      <ul>
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.url}>
            <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
          </li>
        ))}
      </ul>
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Container>
  )
}
