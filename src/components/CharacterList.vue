<template>
  <div>
    <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
  </div>
</template>

<script setup>
import useCharacters from "@/api/characters"
import CharacterCard from "@/components/CharacterCard.vue";
import { onMounted } from "vue"

const { characters, getCharacters } = useCharacters()

onMounted(() => {
  getCharacters()
})
</script>