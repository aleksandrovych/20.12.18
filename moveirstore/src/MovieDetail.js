import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovie } from './actions/movies';

class MovieDetail extends Component {

    componentDidMount(){

        let { getMovie } = this.props;

        getMovie(parseInt(this.props.match.params.movieId, 10));

    }

    render() {

        let {movieIsLoading, movieHasError, movie} = this.props

        return (
            <div>
                Movie
                <div /*movie={movie}*/ />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie:state.movies.movie,
        movieIsLoading:state.movies.movieIsLoading,
        movieHasError:state.movies.movieHasError
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovie
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);