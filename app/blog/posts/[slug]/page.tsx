import React from 'react'

const Slug  = ( { params } : { params : { slug : string} }) => {
  const { slug }  = params
  return (
    <div>To jest super twój elo postuwer numer {slug} </div>
  )
}

export default Slug