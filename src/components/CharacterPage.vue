<template>
  <div>
    <template v-if="!isLoading">
      <nav>
        <router-link to="/" class="nav-link">Back to character List</router-link>
      </nav>
      <CharacterCard :character="character" />
    </template>
    <template v-else>
      <div>Loading...</div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import useCharacters from '@/api/characters';
import CharacterCard from "@/components/CharacterCard.vue";

const { character, getCharacter, isLoading } = useCharacters()
const route = useRoute()

const characterLoaded = ref(false);

onMounted(async () => {
  await getCharacter(route.params.id);
  characterLoaded.value = true;
})
</script>
