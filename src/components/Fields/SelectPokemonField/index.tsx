import { SelectField } from '../SelectField'
import { FormValues } from '../../ScheduleForm/validationSchema'
import { useFormContext } from 'react-hook-form'
import { Props as ReactSelectProps } from 'react-select'

interface Props extends ReactSelectProps {
  label: string
  index: number
  handleChange: (value: string) => void
  fetchGeneration: (value: string) => Promise<{ generation: number }>
}
export function SelectPokemonField({
  handleChange,
  label,
  index,
  fetchGeneration,
  ...rest
}: Props) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>()

  async function onChange(value: string) {
    const { generation } = await fetchGeneration(value)
    setValue(`pokemons.${index}.generation`, generation)
    handleChange(value)
  }

  return (
    <SelectField
      label={label}
      variant="inline"
      handleChange={onChange}
      error={errors.pokemons?.[index]?.name?.message}
      {...rest}
    />
  )
}
