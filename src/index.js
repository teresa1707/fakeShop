import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './container/App/App'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from 'redux/rootReducer'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
