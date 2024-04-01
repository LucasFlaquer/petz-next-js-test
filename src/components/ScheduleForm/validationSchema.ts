import { z } from 'zod'

export const schema = z.object({
  firstName: z.string().min(1, 'Campo Obrigatório'),
  lastName: z.string().min(1, 'Campo Obrigatório'),
  region: z.string().min(1, 'Campo Obrigatório'),
  city: z.string().min(1, 'Campo Obrigatório'),
  pokemons: z
    .array(
      z.object({
        name: z.string().min(1, 'Campo Obrigatório'),
        generation: z.number(),
      }),
    )
    .min(1, 'Selecione pelo menos um pokémon')
    .max(6, 'Não é possível ter mais de 6 pokémons no time'),
  date: z.string().min(1, 'Campo Obrigatório'),
  time: z.string().min(1, 'Campo Obrigatório'),
})

export type FormValues = z.infer<typeof schema>

export const defaultValues: FormValues = {
  firstName: '',
  lastName: '',
  region: '',
  city: '',
  pokemons: [{ name: '', generation: 0 }],
  date: '',
  time: '',
}
