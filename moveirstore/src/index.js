import React from 'react';
import { AppContainer } from 'react-hot-loader'
import './semantic/dist/semantic.min.css';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'

import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import ReactDOM from 'react-dom'
import rootReducer from './reducers'

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    rootReducer(history),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
)

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('react-root')
    )
}

render()

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })

    // Reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer(history))
    })
}
