import axios from 'axios'

export const getAxios = () => {
  const data = axios.get('https://pokeapi.co/api/v2/pokemon')
  console.log('data', data)
  return data
}