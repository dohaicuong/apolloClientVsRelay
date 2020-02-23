import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'

const App: React.FC = (props: any) => {
  const data = useFragment(
    graphql`
      fragment pages_user on User {
        email
        name
        createdAt
      }
    `,
    props.user
  )
  console.log(data)

  return <>App</>
}
export default App