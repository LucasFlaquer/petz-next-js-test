import { useRegions } from '../../hooks/useRegions'
import { TextInput } from '../Fields/TextInput'
import * as S from './styles'
import { SelectField } from '../Fields/SelectField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useRegionCities } from '../../hooks/useCities'
import { Label } from '../Fields/Label'
import { usePokemons } from '../../hooks/usePokemons'

const schema = z.object({
  firstName: z.string(),
  lastname: z.string(),
  region: z.string(),
  city: z.string(),
  pokemons: z
    .array(
      z.object({
        name: z.string(),
        generation: z.number(),
      }),
    )
    .min(1, 'Selecione pelo menos um pokémon')
    .max(6, 'Não é possível ter mais de 6 pokémons no time'),
})

export type FormValues = z.infer<typeof schema>

export function ScheduleForm() {
  const { register, handleSubmit, control, watch } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  const regionValue = watch('region')
  const { regions } = useRegions()
  const { cities } = useRegionCities({ region: regionValue })
  const { pokemons, fetchPokemons } = usePokemons()
  const { fields, append } = useFieldArray({
    control,
    name: 'pokemons',
  })

  function addPokemon() {
    append({
      generation: 0,
      name: '',
    })
  }

  function onSubmit(values: FormValues) {
    console.log(values)
  }

  return (
    <S.Container>
      <h2>Preencha o formulário abaixo para agendar sua consulta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FieldGroup>
          <TextInput
            label="Nome"
            placeholder="Digite seu nome"
            {...register('firstName')}
          />
          <TextInput
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            {...register('lastname')}
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <Controller
            name="region"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Região"
                options={regions}
                instanceId={'region'}
                placeholder="Selecione uma região"
                handleChange={field.onChange}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Cidade"
                options={cities}
                instanceId={'city'}
                handleChange={field.onChange}
              />
            )}
          />
        </S.FieldGroup>
        <S.TeamSection>
          <Label>Cadastre seu time</Label>
          <span>Atendemos até 06 pokémons por vez</span>
          <S.TeamList>
            {fields.map((field, index) => (
              <div key={field.id}>
                <Controller
                  name={`pokemons.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      label={`Pokémon 0${index + 1}`}
                      variant="inline"
                      options={pokemons}
                      onMenuScrollToBottom={fetchPokemons}
                      handleChange={field.onChange}
                    />
                  )}
                />
              </div>
            ))}
            {fields.length <= 5 && (
              <S.TeamListButton type="button" onClick={addPokemon}>
                <span>Adicionar novo pokémon ao time...</span>
                <span>+</span>
              </S.TeamListButton>
            )}
          </S.TeamList>
        </S.TeamSection>
        <button type="submit">submit</button>
      </form>
    </S.Container>
  )
}
