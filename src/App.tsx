import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import { ErrorPage, HomePage, UploadPage } from './pages';
import { Layout } from './components';


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
  ]);

/*
* This is where all the website contents go
*/
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
