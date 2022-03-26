import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBarItem from '../../Header/NavBarItem/NavBarItem'
import CatalogIcon from '../../svg/CatalogIcon'
import './CatalogLink.scss'

const CatalogLink = ({ isNav, btnName }: { isNav?: boolean, btnName?: string }) => {
    return (
        <Link to='/category' className='catalog-link__wrap'>

            {isNav && <NavBarItem itemIcon={<CatalogIcon />} itemName={"Каталог"} />}
            {!isNav && <button className='catalog-link__btn'>{btnName}</button>}
        </Link>
    )
}

export default CatalogLink