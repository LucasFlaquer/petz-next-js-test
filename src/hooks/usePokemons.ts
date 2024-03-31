import { useEffect, useState } from 'react'
import { api } from '../infra/http/requestHandler'

interface PokemonsApiResponse {
  results: { name: string; url: string }[]
  next: string
}

interface PokemonOption {
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
  useEffect(() => {
    fetchPokemons()
  }, [])

  return {
    pokemons,
    fetchPokemons,
  }
}
