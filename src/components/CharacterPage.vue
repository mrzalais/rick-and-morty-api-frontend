<template>
  <div>
    <template v-if="!isLoading">
      <nav>
        <router-link to="/">Back to character List</router-link>
      </nav>
      <CharacterCard :character="character"/>
      <div>
        <h2>Extra Information</h2>
        <p>Gender: {{ character.gender }}</p>
        <p v-if="character.location">Location: {{ character.location.name }}</p>
        <p v-if="character.origin">Origin: {{ character.origin.name }}</p>
      </div>
    </template>
    <template v-else>
      <div>Loading...</div>
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useCharacters from '@/api/characters';
import CharacterCard from "@/components/CharacterCard.vue";

const { character, getCharacter, isLoading } = useCharacters();
const route = useRoute();

onMounted(async () => {
  await getCharacter(route.params.id);
});
</script>
