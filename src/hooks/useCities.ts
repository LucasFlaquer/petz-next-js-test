import { useEffect, useState } from 'react'
import { api } from '../infra/http/requestHandler'
import { captalize } from '../utils/captalize'

interface Props {
  region: string
}

interface DetailRegionResponse {
  id: number
  locations: { name: string }[]
}

export function useRegionCities({ region }: Props) {
  const [cities, setCities] = useState<{ label: string; value: string }[]>([])
  async function fetchCities() {
    try {
      if (!region) return
      const response = await api.get<DetailRegionResponse>(`/region/${region}`)
      const { locations } = response.data
      const cityTownKeywords = ['city', 'town', 'village', 'Township'] // Add more keywords if necessary
      const regionCities = locations
        .filter((region) =>
          cityTownKeywords.some((keyword) => region.name.includes(keyword)),
        )
        .map(({ name }) => ({
          label: name
            .split('-')
            .map((name) => captalize(name))
            .join(' '),
          value: name,
        }))
      setCities(regionCities)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCities()
  }, [region])

  return {
    cities,
  }
}
