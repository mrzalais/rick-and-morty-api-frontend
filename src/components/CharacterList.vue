<template>
  <div>
    <div class="character-card" v-for="character in characters" :key="character.id">
      <div class="character-image">
        <img :src="character.image" :alt="character.name" />
      </div>
      <div class="character-details">
        <h3>{{ character.name }}</h3>
        <p>Species: {{ character.species }}</p>
        <p>Status: {{ character.status }}</p>
      </div>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      loading: false,
      page: 1,
    };
  },
  methods: {
    loadCharacters() {
      this.loading = true;
      fetch(process.env.VUE_APP_URL + `/api/v1/characters?page=${this.page}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data.results)
            this.characters = [...this.characters, ...data.results];
            this.page++;
            this.loading = false;
          })
          .catch((error) => {
            console.error('Error loading characters:', error);
            this.loading = false;
          });
    },
  },
  mounted() {
    this.loadCharacters();
  },
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

.loading {
  text-align: center;
  margin: 20px;
}
</style>