import React from 'react'
import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react'
import SearchStandard from './SearchFlow';
import './index.css'
import { doSearch } from './actions/movies';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Grid} from 'semantic-ui-react'
import routes from './routes';

import { Route, Link, Redirect, Switch } from 'react-router-dom'

class MenuAttached extends React.Component {

    render() {
        let {pathname, searchIsLoading, search} = this.props;
        return (
            <Grid columns={16}>
                <Grid.Column computer={2}/>
                <Grid.Column computer={12}>
            <div>
                    < Menu attached = 'top' >
                        < Dropdown item icon = 'wrench' simple >
                            < Dropdown.Menu >
                                <Link to="/latest/">
                                    < Dropdown.Item active={pathname === '/latest/'}> Latest < /Dropdown.Item>
                                </Link>
                                <Link to="/popular/">
                                    < Dropdown.Item active={pathname === '/popular/'}> Popular < /Dropdown.Item>
                                </Link>
                                <Link to="/watchlist/">
                                    < Dropdown.Item active={pathname === '/watchlist/'}> Watchlist < /Dropdown.Item>
                                </Link>
                            < /Dropdown.Menu>
                        < /Dropdown>
                    < Menu.Menu position = 'right' >
                        {pathname.indexOf('/movie/') === -1 && < div className = 'ui right aligned category search item' >< SearchStandard / >< div className = 'results' / >< /div>}
                                < /Menu.Menu>
                                < /Menu>
            < Segment key='seg' attached = 'bottom' >
                <Grid columns={12}>
                    <Grid.Row>
                        <Grid.Column computer={1} />
                            <Grid.Column computer={14}>
                < div id="minContent" >
                    {routes}
                    < /div>
                            </Grid.Column>
                    <Grid.Column computer={1} />
                    </Grid.Row>
                </Grid>
            < /Segment>
                </div>
                </Grid.Column>
                <Grid.Column computer={2}/>
                </Grid>
    )
    }
}


const mapStateToProps = (state) => {
    return {
        search:state.movies.search,
        searchIsLoading:state.movies.searchIsLoading,
        pathname: state.router.location.pathname,
        watchlistMovies:state.movies.watchlistMovies
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    doSearch,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuAttached);
