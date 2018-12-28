import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovie } from './actions/movies';
import {Image, Header, Container, Label, Progress, Button} from 'semantic-ui-react'
import { add, remove } from './actions/watchlist';

class MovieDetail extends Component {

    componentDidMount(){

        let { getMovie } = this.props;

        getMovie(parseInt(this.props.match.params.movieId, 10));

    }

    doWatchlist = () => {

        let { movie, remove, add } = this.props;

        let targetMovie;

        if(movie.inWatchlist){
            targetMovie = Object.assign({}, movie, {
                inWatchlist: false
            });

        } else {
            targetMovie = Object.assign({}, movie, {
                inWatchlist: true
            });
        }

        if (!targetMovie.inWatchlist){
            return remove({'movie':targetMovie});
        } else {
            return add({'movie':targetMovie});
        }

    }

    render() {

        let {movieIsLoading, movieHasError, movie} = this.props
        let poster = movie !== null && movie.poster !== null  ? 'https://image.tmdb.org/t/p/w500'+movie.poster : 'https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg'
        let title = movie !== null ? movie.title : ''
        let overview = movie !== null ? movie.overview : ''
        let genres = (movie !== null && movie.genres != null) ? movie.genres : []
        let genresColors = ['yellow', "olive", "green", "teal", "blue", "violet", "purple",]
        let rating = movie != null && movie != undefined ? movie.rating : 0
        let rating100 = parseInt(parseFloat(rating) * 10.0)
        let inWatchlist = movie != null ? movie.inWatchlist : false
        return (
            <div>
                <Image style={{display: "flex", float: "left", paddingRight: "30px"}} src={poster} size='large' left  />
                <div style={{ paddingLeft: "30px",}}>
                <Header style={{display: "block", color: "#008080"}} as='h1'>{title}</Header>
                <Container style={{display: "block", font: "regular 120% serif"}} text>
                    {overview}
                </Container>
                    {genres.map((text, index) => <Label style={{marginRight: "10px"}} key={text} basic color={genresColors[index%genresColors.length]} pointing>{text}</Label>)}
                    <div style = {{display: "flex", marginTop: "20px", justifyContent: "space-between",}}>
                    <Progress style={{"progress": {backgroundColor: "red",}}}
                        active
                        indicating
                        percent={100}
                        size='small'
                        color='olive'
                        as='div'
                        precision={rating100}
                    />
                    </div>

                    <Button.Group style={{}}>
                        <Button positive={inWatchlist} onClick={this.doWatchlist}>Watchlist</Button>
                        <Button.Or />
                        <Button positive={!inWatchlist} onClick={this.doWatchlist}>Untracked</Button>
                    </Button.Group>
                </div>
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
    getMovie, add, remove
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);