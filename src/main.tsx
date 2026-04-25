import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from "@/components/ui/sonner"

// used because Api called two time from this StrictMode
if (import.meta.env.PROD) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
      <Toaster />
    </StrictMode>,
  );
} else {
  createRoot(document.getElementById('root')!).render(
    <>
      <App />
      <Toaster />
    </>
  );
}