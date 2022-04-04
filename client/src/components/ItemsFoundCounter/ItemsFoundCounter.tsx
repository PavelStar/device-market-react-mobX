

import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import FiltersSettingsState from '../../store/FiltersSettingsState'
import './ItemsFoundCounter.scss'

const ItemsFoundCounter = observer(() => {

    const { allFilteredItems, itemsFound } = FiltersSettingsState

    useEffect(() => {

        allFilteredItems && FiltersSettingsState.setItemsFound(allFilteredItems?.length)
    }, [allFilteredItems])

    return (
        <b className='items-found-counter'>
            Товаров найдено ({itemsFound})
        </b>
    )
})

export default ItemsFoundCounter