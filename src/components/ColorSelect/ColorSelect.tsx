import React, { useEffect, useState } from 'react'
import { IItemData } from '../../interfaces/IItemData'
import ItemDataState from '../../store/ItemDataState'
import ResponseDataState from '../../store/ResponseDataState'
import './ColorSelect.scss'

const ColorSelect = ({ product }: { product: IItemData }) => {
    const { responseData } = ResponseDataState
    const { } = ItemDataState

    const [allProductColors, setAllProductColors] = useState<IItemData[]>([])

    useEffect(() => {
        if (responseData) {
            setAllProductColors(responseData.items.filter((item) => {
                return item.title === product.title
            }))
        }
    }, [])

    const changeColor = (item: IItemData) => {
        ItemDataState.setItemData(item)
    }


    return (
        <div className="color-select">
            <h3 className="color-select__colors-title">Цвет</h3>
            <ul className="color-select__colors-list">
                {allProductColors.map((item: IItemData) => {

                    const btnColor = {
                        backgroundColor: `${item.color}`,
                    }

                    const borderColor = {
                        border: "1px solid transparent",
                        borderColor: `${item.color}`,

                    }

                    return (
                        <li key={item.id.toString()} className="color-select__color-wrap" style={product.color === item.color ? borderColor : undefined}>

                            <button
                                className={
                                    product.color === item.color
                                        ? "color-select__color-btn color-select__color-btn--active"
                                        : "color-select__color-btn"
                                }
                                style={btnColor}
                                type="button"
                                onClick={() => changeColor(item)}
                            >
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ColorSelect