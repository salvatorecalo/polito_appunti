// App.tsx
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { HomePage, UploadPage } from './pages';
import { Layout } from './components';

export default function App() {
    const routes: RouteObject[] = [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "upload", element: <UploadPage /> },
        ],
      },
    ];

  if (!routes) return <div style={{ textAlign: 'center' }}>Caricamento rotte...</div>;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}