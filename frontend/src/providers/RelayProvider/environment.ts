import 'regenerator-runtime/runtime'

import { Environment, RecordSource, Store } from 'relay-runtime'
import { RelayNetworkLayer, urlMiddleware, authMiddleware, uploadMiddleware } from 'react-relay-network-modern'

export default new Environment({
  store: new Store(new RecordSource()),
  network: new RelayNetworkLayer([
    urlMiddleware({
      url: () => Promise.resolve('http://localhost:4000/'),
    }),
    authMiddleware({
      token: () => localStorage.ACCESS_TOKEN,
    }),
    uploadMiddleware()
  ]),
})