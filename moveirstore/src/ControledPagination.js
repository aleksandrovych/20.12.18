import React, {Component} from 'react'
import {Grid, Input, Pagination, Segment} from 'semantic-ui-react'

export default class PaginationControlled extends Component {
    state = {activePage: 1}

    handleInputChange = (e, {value}) => this.setState({activePage: value})

    handlePaginationChange = (e, {activePage}) => this.setState({activePage})

    render() {
        const {activePage} = this.state
        const p = this.props;

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