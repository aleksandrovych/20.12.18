import _ from 'lodash'
import faker from 'faker'
import React, {Component} from 'react'
import {Search, Grid, Header, Segment} from 'semantic-ui-react'
import {doSearch, clearSearch} from './actions/movies';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {store} from './index';
import {push } from 'react-router-redux';

const source = sorceArray => sorceArray.map(item => ({
    title: item.title.slice(0, 30),
    description: item.desc.slice(0, 70),
    image: item !== null && item.src !== null  ? 'https://image.tmdb.org/t/p/w500'+item.src : 'https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg',
    price: "Rating: " + item.rating,
    id: item.id,
}))


class SearchStandard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            results: this.props.search,
        }
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''})

    handleResultSelect = (e, {result}) => {

        this.setState({value: result.title});
        store.dispatch(push('/movie/'+result.id+'/'))
    }


    onInputChange = (event) => {

        let {doSearch, clearSearch} = this.props;
        let query = event.target.value.toLowerCase();
        this.setState({
            value: query,
            isLoading: this.props.searchIsLoading,
        }, () => {
            if (query && query.length > 1) {
                doSearch(query);
            } else {
                clearSearch();
            }
        })
    }


    render() {
        const {value} = this.state
        let {searchIsLoading, search} = this.props;

        const re = new RegExp(_.escapeRegExp(value), 'i')
        const isMatch = result => re.test(result.title)

        const reducer = function(a, b) { return a.concat(b);}
        const parsed = search.reduce(reducer, []);

        return (
            < Grid>
                < Grid.Column
                    width={6}>
                    < Search
                        loading={searchIsLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.onInputChange, 500, {leading: true})}
                        results={ _.filter(source(parsed), isMatch)}
                        value={value}
                        {...
                            this.props
                        }
                    />
                    <
                    /Grid.Column>

                    <
                    /Grid>
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
                    clearSearch
                }, dispatch)
                    export default connect(mapStateToProps, mapDispatchToProps)(SearchStandard);
