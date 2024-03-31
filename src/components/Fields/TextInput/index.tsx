import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { Label } from '../Label'
import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const TextInput = forwardRef(function TextInput(
  { label, error, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <S.Container>
      <Label htmlFor={rest.id}>{label}</Label>
      <S.Input {...rest} ref={ref} />
      {error && <span>{error}</span>}
    </S.Container>
  )
})
