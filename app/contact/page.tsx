import React from 'react'
import { client } from '../../lib/client'
import { gql } from '@apollo/client'

export const revalidate = 5;
const GET_COMMENT = gql`
query GetComment {
  comments(last: 1) {
    edges {
      node {
        content
      }
    }
  }
}
`

export default async function ContactPage() {
  const response = await client.query({
    query: GET_COMMENT,
  })

  const comment = response?.data?.comments?.edges[0]?.node?.content || 'Nie ma nic mordo w tym zapytaniu ocb?????';

  return (
    <div className="text-red-500 text-lg">
      {comment}
    </div>
  )
}