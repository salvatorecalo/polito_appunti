import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import { HomePage, UploadPage } from './pages';


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/upload",
      element: <UploadPage />,
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