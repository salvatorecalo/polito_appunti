import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import { ErrorPage, HomePage, UploadPage } from './pages';
import { Layout } from './components';
import { courses } from './utils/categories';

const courses_router = Object.entries(courses).map(([key, label]) => ({
  path: `/${key}`,
  element: <div>{label}</div>
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
