import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
