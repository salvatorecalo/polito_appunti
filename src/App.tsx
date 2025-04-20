// App.tsx
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { HomePage, UploadPage } from './pages';
import { Layout } from './components';
import { useState, useEffect } from 'react';

export default function App() {
  const [routes, setRoutes] = useState<RouteObject[] | null>(null);

  useEffect(() => {
    const baseRoutes: RouteObject[] = [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "upload", element: <UploadPage /> },
        ],
      },
    ];
    setRoutes(baseRoutes);
  }, []);

  if (!routes) return <div style={{ textAlign: 'center' }}>Caricamento rotte...</div>;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
