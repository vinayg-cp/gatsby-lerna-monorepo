
import React from 'react'
import Link from 'gatsby-link'
import { Button } from '@vinayg-cp/shared-ui'

export default ({ pathContext: { data }}) => {
  if (!data) return null

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <Button>Purchase</Button>
      {/* <Link to="/">Back to Shop</Link> */}
      <a href={process.env.SHOP_URL}>Back to Shop</a>
    </div>
  )
}