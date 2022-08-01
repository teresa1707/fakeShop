import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/33af62c7-e1d4-4338-9c65-381a776f3c14')
        .then((res) => res.data)
        .then((data) =>
            dispatch({
                type: 'PRODUCTS_SUCCESS',
                products: data.products,
            })
        )
}
