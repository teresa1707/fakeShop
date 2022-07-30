import { Button, Card, CardActions, CardContent } from '@mui/material'
import React, { useState } from 'react'
import './ProductListItem.scss'
import PropTypes from 'prop-types'
import { Quantity } from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'

export const ProductListItem = ({
    id,
    image,
    name,
    description,
    type,
    capacity,
    price,
    addProductToCart,
}) => {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState('red')

    const onIncrementClick = () => {
        setCount(count + 1)
    }
    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const changeColor = () => {
        setColor((prevState) => (prevState === 'red' ? 'green' : 'red'))
    }

    const isLiked = useSelector((state) => state.productsLikeState[id])
    const dispatch = useDispatch()

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispatch({
                                      type: 'DISLIKE',
                                      id,
                                  })
                                : dispatch({
                                      type: 'LIKE',
                                      id,
                                  })
                        }
                    >
                        {' '}
                        {isLiked ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}{' '}
                    </Button>
                    <h2>{name}</h2>

                    <p className="product-description">{description}</p>
                    <p className={color}>{color}</p>
                    <Button variant="contained" onClick={changeColor}>
                        change color
                    </Button>

                    <div className="product-features">
                        <span>Type : </span>
                        {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity : </span>
                        {capacity}Gb
                    </div>
                    <div className="product-price">{price} $</div>
                    <div className="product-quantity">
                        <Quantity
                            count={count}
                            onDecrementClick={onDecrementClick}
                            onIncrementClick={onIncrementClick}
                            minCount={1}
                        />
                    </div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button
                        variant="contained"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number,
}

// ProductsListItems.defaultProps = {
//     description: 'No desc...',
//     image: 'images/no-image.jpg',
// }
