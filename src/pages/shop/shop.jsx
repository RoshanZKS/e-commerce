import React from 'react'
import { PRODUCTS } from '../../prodsucts'
import { Product } from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>Brand Cart</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product)=> <Product key={product.id} data={product}/>)}
        </div>
    </div>
  )
}
