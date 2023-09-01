import { ref } from 'vue'

export default function useCharacters()
{
  const characters = ref({})

  const getCharacters = async () => {
    fetch(process.env.VUE_APP_URL + `/api/v1/characters`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        characters.value = data.results
      })
  }

  return { characters, getCharacters }
}