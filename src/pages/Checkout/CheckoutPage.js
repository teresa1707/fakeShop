import axios from 'axios'
import React, { Component } from 'react'

class CheckoutPage extends Component {
    state = {
        name: '',
        address: '',
        isOrderSent: false,
    }

    orderName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    orderAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: this.state.name,
                    address: this.state.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) =>
                this.setState({
                    name: name,
                    address: address,
                    isOrderSent: true,
                })
            )
    }

    renderForm = () => {
        return (
            <form onSubmit={this.sendForm}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.orderName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={this.state.address}
                        onChange={this.orderAddress}
                    />
                </div>
                <button>Send</button>
            </form>
        )
    }

    renderMessage = () => {
        return (
            <>
                <div>Dear {this.state.name}, thank you for your order!</div>
                <p>Delivery address: {this.state.address}</p>
            </>
        )
    }

    render() {
        return (
            <>
                <h1>Checkout Page</h1>
                {this.state.isOrderSent !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
