<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router'; // use hash mode
=======
import { createRouter, createWebHistory } from 'vue-router';
>>>>>>> 0b5d3071401cf927a3cbece459588c0cab7eab89
import HomepageView from '@/Homepage.vue';
import AboutPage from '@/components/AboutPage.vue';
import WeAreView from '@/components/Weare.vue';

const routes = [
  { path: '/', component: HomepageView },
  { path: '/about', component: AboutPage },
  { path: '/who-we-are', component: WeAreView },
];

const router = createRouter({
<<<<<<< HEAD
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
=======
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

>>>>>>> 0b5d3071401cf927a3cbece459588c0cab7eab89
});

export default router;
