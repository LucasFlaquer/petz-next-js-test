import { z } from 'zod'

export const schema = z.object({
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
  date: z.string(),
  time: z.string(),
})

export type FormValues = z.infer<typeof schema>
