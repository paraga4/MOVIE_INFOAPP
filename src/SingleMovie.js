import React from 'react'
import {useParams} from 'react-router-dom'

export default function SingleMovie() {
    const {id} = useParams()
  return (
    <div>
      Movie id is {id}
    </div>
  )
}
