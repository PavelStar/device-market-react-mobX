import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { IItemData } from '../../interfaces/IItemData'
import ItemDataState from '../../store/ItemDataState'
import ProductSelectsState from '../../store/ProductSelectsState'
import ResponseDataState from '../../store/ResponseDataState'
import ColorSelect from './ColorSelect/ColorSelect'
import MemorySelect from './MemorySelect/MemorySelect'

import './ProductSelects.scss'


const ProductSelects = observer(({ product }: { product: IItemData }) => {

    const { responseData } = ResponseDataState
    const { selectedColor, selectedMemory, selectedTitle } = ProductSelectsState

    useEffect(() => {
        if (selectedColor && selectedMemory) {


            responseData && responseData.items.forEach((item: IItemData) => {
                if (item.title === product.title && item.color === selectedColor && item.features.memory === selectedMemory) {
                    ItemDataState.setItemData(item)
                }

            })
        }
    }, [selectedColor, selectedMemory])


    return (
        <div className='product-selects'>

            <div className='product-selects__inner'>
                <ColorSelect product={product} />
                {product.features.memory && <MemorySelect product={product} />}
            </div>

        </div>
    )
})

export default ProductSelects