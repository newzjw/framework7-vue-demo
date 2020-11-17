import Tabs from '@/pages/Tabs.vue';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';

const routes = [
  {
      path: '/tabs/',
      component: Tabs,
      tabs: [     
          {
              path: '/',
              component: Home,
              id: 'home',
          },
          {
              path: '/about/',
              component: About,
              id: 'about',
          },
          {
              path: '/contact/',
              component: Contact,
              id: 'contact',
          }
      ]
  }
]
export default routes;