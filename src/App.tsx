import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import { ErrorPage, HomePage, UploadPage } from './pages';


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/upload",
      element: <UploadPage />,
      errorElement: <ErrorPage />
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
