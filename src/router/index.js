import { createRouter, createWebHistory } from 'vue-router';
import HomepageView from '@/Homepage.vue';
import AboutPage from '@/components/AboutPage.vue';
import WeAreView from '@/components/Weare.vue';

const routes = [
  { path: '/', component: HomepageView },
  { path: '/about', component: AboutPage },
  { path: '/who-we-are', component: WeAreView },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // make sure routes are included
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
}

});

export default router;
