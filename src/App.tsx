// App.tsx
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { ErrorPage, HomePage, UploadPage } from './pages';
import { Layout } from './components';
import { SearchPage } from './pages/SearchPage/SearchPage';

export default function App() {
    const routes: RouteObject[] = [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "upload", element: <UploadPage /> },
          {path: "search", element: <SearchPage />}
        ],
      },
    ];

  if (!routes) return <div style={{ textAlign: 'center' }}>Caricamento rotte...</div>;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}