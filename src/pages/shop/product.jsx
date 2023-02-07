import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart}= useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt='image'/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
        </div>
        <button className='addToCartBtn' onClick={()=>addToCart(id)}>
            Add to Cart {cartItemAmount >0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}
