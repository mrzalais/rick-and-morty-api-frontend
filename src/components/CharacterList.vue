<template>
  <div>
    <div class="character-card" v-for="character in characters" :key="character.id">
      <div class="character-image">
        <img :src="character.image" :alt="character.name"/>
      </div>
      <div class="character-details">
        <h3>{{ character.name }}</h3>
        <p>Species: {{ character.species }}</p>
        <p>Status: {{ character.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCharacters from "@/api/characters"
import { onMounted } from "vue"

const { characters, getCharacters } = useCharacters()

onMounted(() => {
  getCharacters()
})
</script>

<style scoped>
.character-card {
  display: inline-block;
  width: 25%;
  box-sizing: border-box;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

.character-image img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.character-details {
  text-align: center;
}
</style>