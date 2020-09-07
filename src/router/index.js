import Vue from 'vue';
import Router from 'vue-router';
import ImageContentSection from '@/components/ImageContentSection.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Resume from '@/components/Resume.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'image-content-section',
      component: ImageContentSection
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
});