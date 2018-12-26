import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromWatchlist } from './actions/watchlist';
import ImageMeasurer from "./MasonryProvider";
import { withRouter } from 'react-router-dom'


class Watchlist extends Component {

    doWatchlist(movie) {

        let { dispatch } = this.props;
        return dispatch(removeFromWatchlist(movie));
    }

    render() {

        let { watchlistMovies } = this.props;

        let result = watchlistMovies.map((movie, index) => {
            return index % 4 === 0 ? watchlistMovies.slice(index, index + 4) : null;
        }).filter(movie => movie != null);


        const reducer = function(a, b) { return a.concat(b);}
        const parsed = result.reduce(reducer, []);

        return (
            < ImageMeasurer key="ImageMeasurerPopular" list={parsed} / >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        watchlistMovies:state.movies.watchlistMovies
    }
}

export default withRouter(connect(mapStateToProps)(Watchlist));