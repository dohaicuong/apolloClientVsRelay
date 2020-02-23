import React from 'react'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from './environment'

const RelayProvider: React.FC = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
export default RelayProvider