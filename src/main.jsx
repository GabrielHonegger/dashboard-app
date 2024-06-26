import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContextProvider } from './contexts/ContextProvider.jsx'

import { registerLicense } from '@syncfusion/ej2-base'


registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx0WmFZfVpgdVVMY15bRHBPMyBoS35RckVlW3pfcHdXRmZdVUZ+');



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ContextProvider>
  
)
