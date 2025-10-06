import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/components/AboutPage.vue';
import HomepageView from '@/Homepage.vue';
import WeAreView from '@/components/Weare.vue';
const routes = [
    {path:'/',component:HomepageView},
    {path:'/about',component:AboutPage},
    {path:'/who-we-are',component:WeAreView},
//     {path:'/our-company',component:},
//     {path:'/',component:},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
