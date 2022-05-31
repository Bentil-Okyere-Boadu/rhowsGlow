import React from 'react'
import Product from './Product'

const FeaturedProducts = () => {
  const arr = [ 1,2,3,4 ]
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '1.2rem'}}>
        <h2>Featured Products</h2>
        <div style={{display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
        {
          arr.map(() => {
            return <Product />
          })
        }
        </div>
        
    </div>
  )
}

export default FeaturedProducts