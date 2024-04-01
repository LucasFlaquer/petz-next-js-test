import axios from 'axios'
import { useEffect, useState } from 'react'

interface Option {
  label: string
  value: string
}

export function useScheduling() {
  const [dates, setDates] = useState<Option[]>([])
  const [times, setTimes] = useState<Option[]>([])

  function formatToOption(values: string[]): Option[] {
    return values.map((value) => ({ label: value, value }))
  }

  async function fetchDates() {
    const response = await axios.get<string[]>('/api/scheduling/date')
    setDates(formatToOption(response.data))
  }

  async function fetchTimesByDate(date: string) {
    const response = await axios.post<string[]>(
      '/api/scheduling/time',
      {
        date,
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    )
    setTimes(formatToOption(response.data))
  }

  useEffect(() => {
    fetchDates()
  }, [])

  return {
    dates,
    fetchTimesByDate,
    times,
  }
}
