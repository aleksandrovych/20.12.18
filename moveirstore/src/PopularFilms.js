import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopularMovies } from './actions/movies';
import ImageMeasurer from "./MasonryProvider";
import PaginationControlled from "./ControledPagination";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";
import { withRouter } from 'react-router-dom'
import ReactResizeDetector from 'react-resize-detector';

class PopularFilms extends Component {

    onPageChange = (event) => {

        try {
            let page = event.target.getAttribute('value')

            let { getPopularMovies } = this.props;
            getPopularMovies(page);
        } catch {
        }
    }

    constructor(props) {
        super(props)

        this.state = {width: 0}
    }


    componentDidMount() {
        let { getPopularMovies, activePagePopular } = this.props
        getPopularMovies(activePagePopular);
    }

    calculateLayout = width => {

        this.setState({width: width})
    }


    render() {
        let {moviesAreLoading, movies, totalMovies, activePagePopular} = this.props

        const reducer = function(a, b) { return a.concat(b);}
        const parsed = movies.reduce(reducer, []);
        let pagination = {activePage: activePagePopular, onPageChange: this.onPageChange, totalPages: Math.floor(totalMovies / 20)}
        return [
            <ReactResizeDetector handleWidth onResize={this.calculateLayout}>
                < ImageMeasurer width={this.state.width} key="ImageMeasurerPopular" list={parsed} / >
                </ReactResizeDetector>,
            < PaginationControlled key="PaginationControlledPopular" {...pagination} / >
        ]
    }
}



const mapStateToProps = (state) => {
    return {
        movies:state.movies.movies,
        moviesAreLoading:state.movies.moviesAreLoading,
        totalMovies:state.movies.totalMovies,
        activePagePopular:state.movies.activePagePopular
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getPopularMovies
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopularFilms));