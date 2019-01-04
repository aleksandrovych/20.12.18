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
import thunkMiddleware from 'redux-thunk'

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer(history),
    composeEnhancer(
        applyMiddleware(
            thunkMiddleware,
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
        document.getElementById('root')
    )
}

render()

if (module.hot) {
    module.hot.accept('./App', () => {
        render()
    })

    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer(history))
    })
}
