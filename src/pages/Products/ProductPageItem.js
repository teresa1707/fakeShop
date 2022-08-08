import React from 'react'
import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject } from 'utils/productsArray'

export const ProductPageItem = ({
    productsObject = getProductsObject(productsArray),
}) => {
    let { id } = useParams()
    return (
        <>
            <h1 style={{ color: 'red' }}>{productsObject[id].name}</h1>
            <h2 style={{ color: 'blue' }}>{productsObject[id].description}</h2>
        </>
    )
}
