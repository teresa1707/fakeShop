import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './container/App/App'
import { Provider } from 'react-redux'
import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'
import { rootReducer } from 'redux/rootReducer'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
