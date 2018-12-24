import React from 'react'
import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react'
import SearchStandard from './SearchFlow';
import PaginationControlled from './ControledPagination'
import './index.css'
import ImageMeasurer from './MasonryProvider';

const MenuAttached = () => (
    < div >
    < Menu attached = 'top' >
    <Dropdown item icon = 'wrench' simple >
        < Dropdown.Menu >

    < Dropdown.Item >Latest< /Dropdown.Item>
    < Dropdown.Item >Popular<
/Dropdown.Item>
< Dropdown.Item >Watchlist< /Dropdown.Item>

< /Dropdown.Menu>
< /Dropdown>

< Menu.Menu position = 'right'>
    < div className = 'ui right aligned category search item'>
        < div className = 'ui transparent icon input' >
            <SearchStandard/>
    < /div>
    <div className = 'results' />
    < /div>
    < /Menu.Menu>
    < /Menu>

    < Segment key='seg'
attached = 'bottom'>
    <div id="minContent" className="minContent">

    <ImageMeasurer/>

    <PaginationControlled/>
    </div>
    < /Segment>
    < /div>
)

export default MenuAttached