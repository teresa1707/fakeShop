import React from 'react'

export const CartProductListItem = ({ product, productCount }) => {
    let total = product.price * productCount
    return (
        <div>
            <div>
                {product.name} : {product.price} $ *{productCount} = {total} $
            </div>
        </div>
    )
}
