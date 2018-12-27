import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import LatestFilms from "../LatestFilms";
import PopularFilms from "../PopularFilms";
import Watchlist from "../Watchlist";
import MovieDetail from "../MovieDetail";

const routes = (
    <div>
        <Switch>
            <Redirect exact from="/" to="/latest/"/>
            <Route  path="/latest/"  component={LatestFilms} />
            <Route  path="/popular/" component={PopularFilms} />
            <Route  path="/watchlist/" component={Watchlist} />
            <Route  path='/movie/:movieId' component={MovieDetail}/>
            <Route component={()=>(<div><h1>Data Not Found</h1></div>)} />
        </Switch>
    </div>
)

export default routes