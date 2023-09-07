<template>
  <div class="character-card" @click="viewCharacter">
    <div class="character-image">
      <img :src="character.image" :alt="character.name"/>
    </div>
    <div class="character-details">
      <h3>{{ character.name }}</h3>
      <p>Species: {{ character.species }}</p>
      <p>Status: {{ character.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  methods: {
    viewCharacter() {
      this.$router.push({ name: 'character', params: { id: this.character.id } });
    }
  }
};
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
