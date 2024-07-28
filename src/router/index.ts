import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeaderLayout from '@/components/HeaderLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      component: HeaderLayout,
      children: [
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'activity',
          name: 'activity',
          component: () => import('../views/ActivityView.vue'),
        },
        {
          path: 'experience',
          name: 'experience',
          redirect: { name: 'projects' },
          children: [
            {
              path: 'projects',
              children: [
                {
                  path: '',
                  name: 'projects',
                  component: () => import('../views/ProjectsView.vue'),
                },
                // {
                //   path: ':projectId',
                //   name: 'project',
                //   component: () => import('../views/ProjectView.vue'),
                //   props: true,
                // },
              ]
            },
            {
              path: 'companies',
              name: 'companies',
              component: () => import('../views/CompaniesView.vue'),
            },
            {
              path: 'education',
              name: 'education',
              component: () => import('../views/EducationView.vue'),
            },
            {
              path: 'skills',
              name: 'skills',
              component: () => import('../views/ProjectsView.vue'),
            }
          ]
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
        {
          path: ':pathMatch(.*)*',
          name: 'not-found',
          component: () => import('../views/NotFoundView.vue'),
        }
      ],
    },
  ],
})

export default router
