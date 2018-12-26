import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getLatestMovies } from './actions/movies';
import PaginationControlled from "./ControledPagination";
import ImageMeasurer from "./MasonryProvider";
import { withRouter } from 'react-router-dom'

class LatestFilms extends Component {

    constructor(props) {
        super(props)

        this.onPageChange = this.onPageChange.bind(this);
        console.log('LatestFilms')
    }

    onPageChange(event) {

        try {

            let page = event.target.getAttribute('value')

            let {getLatestMovies} = this.props;
            getLatestMovies(page);
        } catch {
            console.log('LatestFilms onPageChange')
        }
    }

    componentDidMount(){

        let { getLatestMovies, activePageLatest } = this.props;
        getLatestMovies(activePageLatest);

    }

    render() {
        let {moviesAreLoading, movies, totalMovies, activePagePopular} = this.props

        const reducer = function(a, b) { return a.concat(b);}
        const parsed = movies.reduce(reducer, []);
        let pagination = {activePage: activePagePopular, onPageChange: this.onPageChange, totalPages: Math.floor(totalMovies / 20)}
        return [
            < ImageMeasurer key="ImageMeasurerLatest" list={parsed} / >,
            < PaginationControlled key="PaginationControlledLatest" {...pagination} / >
    ]
    }
}

const mapStateToProps = (state) => {
    return {
        movies:state.movies.movies,
        moviesAreLoading:state.movies.moviesAreLoading,
        totalMovies:state.movies.totalMovies,
        activePageLatest:state.movies.activePageLatest
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getLatestMovies
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LatestFilms));