import React from 'react'
import RelayProvider from 'providers/RelayProvider'
import App from 'pages'

const AppRoot: React.FC = () => {
  return (
    <RelayProvider>
      <React.Suspense fallback={'Loading...'}>
        <App />
      </React.Suspense>
    </RelayProvider>
  )
}
export default AppRoot
