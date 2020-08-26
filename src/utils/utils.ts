import axios from 'axios'

export async function fetchData(url: string): Promise<any> {
  const { data } = await axios({
    url: url,
    method: 'get',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': process.env.REACT_APP_GITHUB_TOKEN
    }
  })

  return data
}

export function formatNumber(number: number): string {
  return `${(number / 1000).toFixed(1)}k`
}
