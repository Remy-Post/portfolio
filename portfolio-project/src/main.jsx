import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Index from "./Index.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Projects from "./Projects.jsx";
import GitHub from "./GitHub.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Index />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "github",
                element: <GitHub />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
