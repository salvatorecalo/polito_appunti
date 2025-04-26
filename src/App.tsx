// App.tsx
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { ErrorPage, HomePage, UploadPage, SearchPage, CreditsPage, OpenSourcePage } from './pages';
import { Layout } from './components';

export default function App() {
    const routes: RouteObject[] = [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "upload", element: <UploadPage /> },
          { path: "credits", element: <CreditsPage /> },
          {path: "search", element: <SearchPage />},
          {path: "opensource", element: <OpenSourcePage />},
        ],
      },
    ];

  if (!routes) return <div style={{ textAlign: 'center' }}>Caricamento rotte...</div>;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}