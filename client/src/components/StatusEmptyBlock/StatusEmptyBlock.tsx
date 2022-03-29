import React from 'react'
import CatalogLink from '../buttons/CatalogLink/CatalogLink'
import EmptyCart from '../svg/EmptyCart'
import './StatusEmptyBlock.scss'

const StatusEmpty = ({ title, image }: { title: string, image: JSX.Element }) => {
    return (
        <div className="cart__empty-cart-block empty-cart-block">
            <p className="empty-cart-block__title">{title}</p>
            <div className="empty-cart-block__img-wrap">
                {image}
            </div>
            {/* <CatalogLink btnName="Перейти в каталог" /> */}
        </div>
    )
}

export default StatusEmpty