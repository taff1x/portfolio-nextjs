import React from 'react'

const Slug  = ( { params } : { params : { slug : string} }) => {
  const { slug }  = params
  return (
    <div>This is example post no. {slug} </div>
  )
}

export default Slug