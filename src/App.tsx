// App.tsx o App.jsx
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  RouteObject
} from 'react-router-dom';
import './App.css';
import { HomePage, UploadPage } from './pages';
import { Layout } from './components';
import { getCategories } from './utils';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';

export default function App() {
  const [routes, setRoutes] = useState<RouteObject[] | null>(null);

  useEffect(() => {
    async function setupRoutes() {
      const categories = await getCategories();

      const courseRoutes: RouteObject[] = Object.entries(categories).map(([key, label]) => ({
        path: `/${key}`,
        element: <CategoryPage label={label} categoryKey={key} />
      }));

      const baseRoutes: RouteObject[] = [
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <HomePage /> },
            { path: "upload", element: <UploadPage /> },
          ],
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
        ...courseRoutes
      ];

      setRoutes(baseRoutes);
    }

    setupRoutes();
  }, []);

  if (!routes) return <div style={{textAlign: 'center',}}>Caricamento rotte...</div>;

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
