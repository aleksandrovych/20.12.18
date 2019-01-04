import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import { ConnectedRouter } from 'connected-react-router'
import MenuAttached from './MenuFlow'

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
            <MenuAttached/>
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App