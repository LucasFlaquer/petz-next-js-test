import { Props as ReactSelectProps } from 'react-select'
import * as S from './styles'
import dynamic from 'next/dynamic'

type Option = { label: string; value: string }

const Select = dynamic(() => import('react-select'), { ssr: false })

interface Props extends ReactSelectProps {
  label: string
  variant?: 'default' | 'inline'
  handleChange: (value: string) => void
}

export function SelectField({
  label,
  variant = 'default',
  handleChange,
  ...rest
}: Props) {
  function onChange(values: { label: string; value: string }) {
    handleChange(values.value)
  }
  return (
    <S.Container variant={variant}>
      <S.SelectLabel variant={variant}>{label}</S.SelectLabel>
      <Select
        className="custom-react-select"
        {...rest}
        onChange={(option) => onChange(option as Option)}
      />
    </S.Container>
  )
}
