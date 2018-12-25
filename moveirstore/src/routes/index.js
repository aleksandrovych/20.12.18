import React from 'react'
import { Route, Switch } from 'react-router'
import Menu from '../MenuFlow'

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route component={()=>(<div><h1>Data Not Found</h1></div>)} />
        </Switch>
    </div>
)

export default routes