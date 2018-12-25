import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopularMovies } from './actions/movies';
import ImageMeasurer from "./MasonryProvider";
import PaginationControlled from "./ControledPagination";


class PopularFilms extends Component {

    onPageChange = (pageNumber) => {

        let { getPopularMovies } = this.props;

        getPopularMovies(pageNumber);
    }

    componentDidMount(){

        let { getPopularMovies, activePagePopular } = this.props
        getPopularMovies(activePagePopular);
    }

    render() {
        console.dir({totalMovies: totalMovies})
        let {moviesAreLoading, movies, totalMovies, activePagePopular} = this.props
        let pagination = {activePage: activePagePopular, onPageChange: this.onPageChange, totalPages: Math.floor(totalMovies / 20)}
        return [
            < ImageMeasurer list={movies} / >,
            < PaginationControlled {...pagination} / >
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

export default connect(mapStateToProps, mapDispatchToProps)(PopularFilms);