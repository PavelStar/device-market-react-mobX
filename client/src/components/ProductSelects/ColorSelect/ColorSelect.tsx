import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { IItemData } from '../../../interfaces/IItemData'
import ProductSelectsState from '../../../store/ProductSelectsState'
import ResponseDataState from '../../../store/ResponseDataState'
import './ColorSelect.scss'

const ColorSelect = observer(({ product }: { product: IItemData }) => {
    const { responseData } = ResponseDataState

    const [colorsList, setColorsList] = useState<string[]>([])

    useEffect(() => {
        if (responseData) {
            let colors: string[] = []

            responseData.items.forEach((item: IItemData) => {
                if (product.title === item.title && !colors.includes(item.color)) {
                    colors.push(item.color)
                }

            })
            setColorsList(colors)
        }
    }, [])



    return (
        <div className="color-select">
            <h3 className="color-select__colors-title">Цвет</h3>
            <ul className="color-select__colors-list">
                {colorsList.map((color: string) => {

                    const btnColor = {
                        backgroundColor: `${color}`,
                    }

                    const borderColor = {
                        border: "1px solid transparent",
                        borderColor: `${color}`,

                    }

                    return (
                        <li className="color-select__color-wrap" style={product.color === color ? borderColor : undefined}>

                            <button
                                className={
                                    product.color === color
                                        ? "color-select__color-btn color-select__color-btn--active"
                                        : "color-select__color-btn"
                                }
                                style={btnColor}
                                type="button"
                                onClick={() => colorsList.length > 1 && ProductSelectsState.setSelectedColor(color)}
                            >
                            </button>
                        </li>
                    );
                })}

            </ul>
        </div>
    )
})

export default ColorSelect