import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromWatchlist } from './actions/watchlist';
import ImageMeasurer from "./MasonryProvider";
import { withRouter } from 'react-router-dom'
import ReactResizeDetector from 'react-resize-detector';


class Watchlist extends Component {

    doWatchlist(movie) {

        let { dispatch } = this.props;
        return dispatch(removeFromWatchlist(movie));
    }

    constructor(props) {
        super(props)

        this.state = {width: 0}
    }

    calculateLayout = width => {

        this.setState({width: width})
    }

    render() {

        let { watchlistMovies } = this.props;

        let result = watchlistMovies.map((movie, index) => {
            return index % 4 === 0 ? watchlistMovies.slice(index, index + 4) : null;
        }).filter(movie => movie != null);


        const reducer = function(a, b) { return a.concat(b);}
        const parsed = result.reduce(reducer, []);

        return (
            <ReactResizeDetector handleWidth onResize={this.calculateLayout}>
            < ImageMeasurer width={this.state.width} key="ImageMeasurerPopular" list={parsed} / >
            </ReactResizeDetector>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        watchlistMovies:state.movies.watchlistMovies
    }
}

export default withRouter(connect(mapStateToProps)(Watchlist));