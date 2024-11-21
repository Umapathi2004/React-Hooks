import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErroePage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>{error.message}</div>
  )
}

export default ErroePage