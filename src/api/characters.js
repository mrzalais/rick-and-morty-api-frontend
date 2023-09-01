import { ref } from 'vue'

export default function useCharacters() {
  const characters = ref([])
  const isLoading = ref(false)

  const getCharacters = async (page) => {
    if (isLoading.value) return // Prevent concurrent requests

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

  return { characters, getCharacters }
}