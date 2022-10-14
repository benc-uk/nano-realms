import HomePage from './components/HomePage.vue'
import CharacterEdit from './components/CharacterEdit.vue'
import PlayGame from './components/PlayGame.vue'
import TestHarness from './components/TestHarness.vue'
import { isLoggedIn } from '@/services/auth'

export const routes = [
  { path: '/', component: HomePage },

  { path: '/home', component: HomePage },
  { path: '/test', component: TestHarness },

  {
    path: '/character',
    component: CharacterEdit,
    beforeEnter: () => {
      if (!isLoggedIn()) {
        return '/'
      }
      return true
    },
  },

  {
    path: '/play',
    component: PlayGame,
    beforeEnter: () => {
      if (!isLoggedIn()) {
        return '/'
      }
      return true
    },
  },
]
