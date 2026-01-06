import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'

import router from './Routes/Route.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ThemeProvider } from './Context/ThemeProvider.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
