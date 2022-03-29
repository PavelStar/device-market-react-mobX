import React from 'react'
import { JsxElement } from 'typescript'
import './NavBarItem.scss'

const NavBarItem = ({ itemIcon, itemName }: { itemIcon?: JSX.Element, itemName?: string }) => {
    return (
        <div className='nav-bar-item'>
            <div className='nav-bar-item__icon'>{itemIcon}</div>
            {/* <p className='nav-bar-item__name'>{itemName}</p> */}
        </div>
    )
}

export default NavBarItem