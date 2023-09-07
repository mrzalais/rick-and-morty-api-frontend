import { ref } from 'vue'

export default function useCharacters() {
  const characters = ref([])
  const character = ref({})
  const isLoading = ref(false)

  const getCharacters = async (page) => {
    if (isLoading.value) {
      return
    }

    isLoading.value = true
    fetch(process.env.VUE_APP_URL + `/api/v1/characters?page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        characters.value = [...characters.value, ...data.results]
        isLoading.value = false
      })
  }

  const getCharacter = async (id) => {
    if (isLoading.value) {
      return
    }

    isLoading.value = true
    fetch(process.env.VUE_APP_URL + `/api/v1/character/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        character.value = data
        isLoading.value = false
      })
  }

  return { characters, character, getCharacters, getCharacter, isLoading }
}