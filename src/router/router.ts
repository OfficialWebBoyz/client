import { createBrowserRouter } from 'react-router-dom'
import { urls } from '~/shared/urls'

export const router = createBrowserRouter([
  {
    path: urls.home(),
    async lazy() {
      const {default: Component} = await import('~/shared/components/Providers')
      return {
        Component
      }
    },
    children: [
      {
        index: true,
        path: urls.home(),
        async lazy() {
          const {default: Component} = await import('~/routes/home/Route')
          return {
            Component
          }
        }
      },
      {
        path: urls.play(),
        element: null,
      }
    ]
  },
])