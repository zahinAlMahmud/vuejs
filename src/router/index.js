
import { createRouter, createWebHashHistory } from 'vue-router'; // use hash mod


import HomepageView from '@/Homepage.vue';
import AboutPage from '@/components/AboutPage.vue';
import WeAreView from '@/components/Weare.vue';

const routes = [
  { path: '/', component: HomepageView },
  { path: '/about', component: AboutPage },
  { path: '/who-we-are', component: WeAreView },
];

const router = createRouter({

  history: createWebHashHistory(), // hash mode for GitHub Pages
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        return window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    }
    return { top: 0 };
  },
});

export default router;
