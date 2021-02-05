import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import './main.css'

// My import
import {store} from './store'
import {history} from './store'
import {routes} from 'routes'

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
