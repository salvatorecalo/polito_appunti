import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import { HomePage, UploadPage } from './pages';
import { Layout } from './components';
import { getCategories } from './utils';

const courses_router = Object.entries(getCategories).map(([key, label]) => ({
  path: `/${key}`,
  element: <div>{label}</div>
}));

const router = createBrowserRouter([
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
  ...courses_router
]);

/*
* This is where all the website contents go
*/
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
