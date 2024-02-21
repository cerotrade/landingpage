import { createRouter, createWebHistory } from 'vue-router';
import { APP_NAMES } from '@/plugins/dictionary';

// route imports
import LandingPage from '@/pages/welcome/landing-page.vue';
import AboutUs from '@/pages/welcome/about-us.vue';
import ContactUs from '@/pages/welcome/contact-us.vue';
import Companies from '@/pages/welcome/companies.vue';
import Generators from '@/pages/welcome/generators.vue';
import FAQ from '@/pages/welcome/faq.vue';

const DEFAULT_TITLE = APP_NAMES.capitalize;

const Base = {
  template: `
    <router-view></router-view>
  `,
};

const routes = [
  {
    path: '/',
    name: 'BaseRoute',
    component: Base,
    children: [
      {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
        meta: { head: `Home - ${DEFAULT_TITLE}` },
      },
      {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
        meta: { head: `About Us - ${DEFAULT_TITLE}` },
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
        meta: { head: `Contact Us - ${DEFAULT_TITLE}` },
      },
      {
        path: '/companies',
        component: Companies,
        name: 'Companies',
        meta: { head: `Companies - ${DEFAULT_TITLE}` },
      },
      {
        path: '/generators',
        name: 'Generators',
        component: Generators,
        meta: { head: `Generators - ${DEFAULT_TITLE}` },
      },
      {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
        meta: { head: `FAQ - ${DEFAULT_TITLE}` },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
