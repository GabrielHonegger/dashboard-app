import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContextProvider } from './contexts/ContextProvider.jsx'

import { registerLicense } from '@syncfusion/ej2-base'


registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5VdENiWXtWdHVSR2Jb');



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>,
)
