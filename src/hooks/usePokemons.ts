import { useEffect, useState } from 'react'
import { api } from '../infra/http/requestHandler'
import { romanToInt } from '../utils/roman'

interface PokemonsApiResponse {
  results: { name: string; url: string }[]
  next: string
}
interface PokemonSpecieResponse {
  generation: {
    name: string
  }
}

export interface PokemonOption {
  label: string
  value: string
}

export function usePokemons() {
  const [pokemons, setPokemons] = useState<PokemonOption[]>([])
  const [nextPage, setNextPage] = useState('/pokemon')
  async function fetchPokemons() {
    const response = await api.get<PokemonsApiResponse>(nextPage)
    setNextPage(response.data.next)
    const pokemonList = response.data.results.map((pokemon) => ({
      label: pokemon.name,
      value: pokemon.name,
    }))
    setPokemons((state) => [...state, ...pokemonList])
    return pokemonList
  }

  async function getPokemonDetail(pokemon: string) {
    const response = await api.get<PokemonSpecieResponse>(
      `/pokemon-species/${pokemon}`,
    )
    const genValue = response.data.generation.name.split('generation-')[1]
    return {
      generation: romanToInt(genValue.toLocaleUpperCase()),
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return {
    pokemons,
    fetchPokemons,
    getPokemonDetail,
  }
}
