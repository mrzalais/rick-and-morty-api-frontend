<template>
  <div ref="characterList">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character"/>
  </div>
</template>

<script setup>
import useCharacters from "@/api/characters";
import CharacterCard from "@/components/CharacterCard.vue";
import { onMounted, onUnmounted, ref } from "vue";

const { characters, getCharacters, isLoading } = useCharacters();
const characterList = ref(null);
const page = ref(1);

onMounted(() => {
  getCharacters(page.value);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading.value) {
    page.value++;
    getCharacters(page.value);
  }
};
</script>
