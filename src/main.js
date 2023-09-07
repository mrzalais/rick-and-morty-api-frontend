import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import CharacterPage from '@/components/CharacterPage.vue'
import CharacterList from '@/components/CharacterList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'characterList', component: CharacterList },
    { path: '/character/:id', name: 'character', component: CharacterPage },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')