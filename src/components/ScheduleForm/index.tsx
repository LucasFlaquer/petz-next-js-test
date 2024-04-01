import { useRegions } from '../../hooks/useRegions'
import { TextInput } from '../Fields/TextInput'
import * as S from './styles'
import { SelectField } from '../Fields/SelectField'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import { useRegionCities } from '../../hooks/useCities'
import { Label } from '../Fields/Label'
import { useEffect } from 'react'
import { useScheduling } from '../../hooks/useScheduling'
import { SelectPokemonField } from '../Fields/SelectPokemonField'
import { usePokemons } from '../../hooks/usePokemons'
import { currencyBRFromat } from '../../utils/formatCurrency'
import { FormValues, defaultValues, schema } from './validationSchema'
import { getHighestGent } from '../../utils/highestGen'

export function ScheduleForm() {
  const { fetchPokemons, getPokemonDetail, pokemons } = usePokemons()
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = methods
  const regionValue = watch('region')
  const pokemonArrayFields = watch('pokemons')
  const dateValue = watch('date')
  const { regions } = useRegions()
  const { cities } = useRegionCities({ region: regionValue })
  const { dates, times, fetchTimesByDate } = useScheduling()
  const { fields, append } = useFieldArray({
    control,
    name: 'pokemons',
  })

  const pokemonsList = fields.map((field, index) => {
    return {
      ...field,
      ...pokemonArrayFields[index],
    }
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

  useEffect(() => {
    if (!dateValue) return
    fetchTimesByDate(dateValue)
  }, [dateValue])

  const attendePokemonsAmount = fields.length
  const unitPokemonValue = 70
  const subtotal = attendePokemonsAmount * unitPokemonValue
  const taxPercentage = getHighestGent(pokemonsList) * 3
  const calculatedPercentage = taxPercentage > 30 ? 30 : taxPercentage
  const manegementTax = (subtotal * calculatedPercentage) / 100
  const totalValue = subtotal + manegementTax

  return (
    <S.Container>
      <h2>Preencha o formulário abaixo para agendar sua consulta</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.FieldGroup>
            <TextInput
              label="Nome"
              placeholder="Digite seu nome"
              {...register('firstName')}
              error={errors?.firstName?.message}
            />
            <TextInput
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              {...register('lastname')}
              error={errors?.lastname?.message}
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
                  error={errors.region?.message}
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
                  placeholder="Selecione sua cidade"
                  error={errors.city?.message}
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
                      <SelectPokemonField
                        label={`Pokémon 0${index + 1}`}
                        index={index}
                        handleChange={field.onChange}
                        options={pokemons}
                        onMenuScrollToBottom={fetchPokemons}
                        fetchGeneration={getPokemonDetail}
                        placeholder="Selecione seu pokémon"
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
          <S.FieldGroup>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <SelectField
                  label="Data para Atendimento"
                  options={dates}
                  handleChange={field.onChange}
                  placeholder="Selecione uma data"
                  error={errors.date?.message}
                />
              )}
            />
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <SelectField
                  label="Horário de Atendimento"
                  options={times}
                  handleChange={field.onChange}
                  placeholder="Selecione um horário"
                  error={errors.time?.message}
                />
              )}
            />
          </S.FieldGroup>
          <S.ResumeContainer>
            <S.Resume>
              <span>Número de pokemons a serem atendidos</span>
              <span>0{attendePokemonsAmount}</span>
            </S.Resume>
            <S.Resume>
              <span>Atendimento unitário por pokémon:</span>
              <span>{currencyBRFromat(unitPokemonValue)}</span>
            </S.Resume>
            <S.Resume>
              <span>Subtotal:</span>
              <span>{currencyBRFromat(subtotal)}</span>
            </S.Resume>
            <S.Resume>
              <span>
                Taxa gerencial*: <br />
                <small>
                  *adicionamos uma taxa de 3%, multiplicado pelo número da
                  geração mais alta do time, com limite de até 30%
                </small>
              </span>
              <span>{currencyBRFromat(manegementTax)}</span>
            </S.Resume>
          </S.ResumeContainer>
          <S.SubmitContainer>
            <h3>Valor Total: {currencyBRFromat(totalValue)}</h3>
            <S.SubmitButton type="submit">Confirmar Agendamento</S.SubmitButton>
          </S.SubmitContainer>
        </form>
        <pre>{JSON.stringify(errors.region?.message)}</pre>
      </FormProvider>
    </S.Container>
  )
}
