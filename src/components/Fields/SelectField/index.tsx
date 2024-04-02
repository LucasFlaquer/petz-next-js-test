import { Props as ReactSelectProps } from 'react-select'
import * as S from './styles'
import dynamic from 'next/dynamic'
import { Label } from '../Label'

type Option = { label: string; value: string }

const Select = dynamic(() => import('react-select'), { ssr: false })

interface Props extends ReactSelectProps {
  label: string
  variant?: 'default' | 'inline'
  handleChange: (value: string) => void
  error?: string | undefined
}

export function SelectField({
  label,
  variant = 'default',
  handleChange,
  error,
  ...rest
}: Props) {
  function onChange(values: { label: string; value: string }) {
    handleChange(values.value)
  }
  return (
    <S.Container $variant={variant}>
      <Label htmlFor={rest.name}>{label}</Label>
      <Select
        className="custom-react-select"
        {...rest}
        onChange={(option) => onChange(option as Option)}
      />
      {error && <span>{error}</span>}
    </S.Container>
  )
}
