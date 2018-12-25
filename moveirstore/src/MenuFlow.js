import React from 'react'
import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react'
import SearchStandard from './SearchFlow';
import PaginationControlled from './ControledPagination'
import './index.css'
import ImageMeasurer from './MasonryProvider';
import { doSearch } from './actions/movies';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PopularFilms from './PopularFilms';


class MenuAttached extends React.Component {

    render() {
        let {pathname, searchIsLoading, search} = this.props;
        return (
            < div >
            < Menu
        attached = 'top' >
            < Dropdown
        item
        icon = 'wrench'
        simple >
        < Dropdown.Menu >

        < Dropdown.Item > Latest < /Dropdown.Item>
        < Dropdown.Item > Popular < /Dropdown.Item>
        < Dropdown.Item > Watchlist < /Dropdown.Item>

        < /Dropdown.Menu>
        < /Dropdown>

        < Menu.Menu
        position = 'right' >
            < div
        className = 'ui right aligned category search item' >
            < div
        className = 'ui transparent icon input' >
            < SearchStandard / >
            < /div>
            < div
        className = 'results' / >
            < /div>
            < /Menu.Menu>
            < /Menu>

            < Segment
        key = 'seg'
        attached = 'bottom' >
            < div
        id = "minContent"
        className = "minContent" >

            <PopularFilms/>
            < /div>
            < /Segment>
            < /div>
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
