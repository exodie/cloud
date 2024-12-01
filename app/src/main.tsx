import App from '.'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ConfigProvider, theme } from 'antd'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ConfigProvider theme={{ ...theme, algorithm: theme.darkAlgorithm }}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
