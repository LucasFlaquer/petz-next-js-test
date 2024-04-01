interface Pokemon {
  name: string
  generation: number
}

export function getHighestGent(pokemons: Pokemon[]): number {
  let maxGeneration = Number.MIN_SAFE_INTEGER
  for (const pokemon of pokemons) {
    if (pokemon.generation > maxGeneration) {
      maxGeneration = pokemon.generation
    }
  }

  return maxGeneration
}
