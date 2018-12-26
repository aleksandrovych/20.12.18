import React, {Component} from 'react'
import {Grid, Pagination} from 'semantic-ui-react'

export default class PaginationControlled extends Component {

    constructor(props) {
        super(props)

        this.state = { activePage: 1, onPageChange: () => {}, totalPages: 1};
    }


    static getDerivedStateFromProps(nextProps, prevState) {
            let res = {...prevState, activePage: nextProps.activePage, onPageChange: nextProps.onPageChange, totalPages: nextProps.totalPages}
            res.activePage = res.activePage === undefined ? 1 : res.activePage
            res.onPageChange = res.onPageChange === null ? () => {} : res.onPageChange
            res.totalPages = res.totalPages ===undefined ? 1 : res.totalPages
            return res;
    }

    handleInputChange = (e, {value}) => this.setState({activePage: value})

    handlePaginationChange = (e, {activePage}) => this.setState({activePage})

    render() {
        const p = this.state;

        return (
            < Grid padded='vertically'
        columns = {3}
        verticalAlign = 'middle'>
            < Grid.Column />
        < Grid.Column >
        < Pagination
        activePage = {p.activePage}
        onPageChange = {p.onPageChange}
        totalPages = {p.totalPages}
        />
        < /Grid.Column>
        < Grid.Column />
        < /Grid>
    )
    }
}