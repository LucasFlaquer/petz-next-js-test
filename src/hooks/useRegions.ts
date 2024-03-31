import { useEffect, useState } from 'react'
import { api } from '../infra/http/requestHandler'

interface Region {
  label: string
  value: string
}

interface RegionsApiResponse {
  results: { name: string; url: string }[]
}

export function useRegions() {
  const [pokemonRegions, setPokemonRegions] = useState<Region[]>([])
  async function fetchPokemonRegions() {
    const response = await api.get<RegionsApiResponse>('/region')
    const regions = response.data.results.map((region) => ({
      label: region.name,
      value: region.name,
    }))
    setPokemonRegions(regions)
  }
  useEffect(() => {
    fetchPokemonRegions()
  }, [])
  return {
    regions: pokemonRegions,
  }
}
