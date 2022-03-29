import React, { useEffect, useState } from 'react'
import { IItemData } from '../../../interfaces/IItemData'
import ResponseDataState from '../../../store/ResponseDataState'
import ProductSelectsState from '../../../store/ProductSelectsState'
import './MemorySelect.scss'
import { observer } from 'mobx-react-lite'

const MemorySelect = observer(({ product }: { product: IItemData }) => {

    const { responseData } = ResponseDataState

    const [memoryList, setMemoryList] = useState<string[]>([])

    useEffect(() => {
        if (responseData) {
            let memory: string[] = []

            responseData.items.forEach((item: IItemData) => {
                if (product.title === item.title && !memory.includes(item.features.memory)) {
                    memory.push(item.features.memory)
                }

            })
            setMemoryList(memory)
        }

    }, [])


    return (
        <div className="memory-select">
            <h3 className="memory-select__colors-title">Объем памяти</h3>
            <ul className="memory-select__memory-list">
                {memoryList.map((memory: string) => {

                    return (
                        <li className={product.features.memory === memory ? "memory-select__memory-wrap memory-select__memory-wrap--active" : "memory-select__memory-wrap"}
                        >

                            <button
                                className={
                                    product.features.memory === memory
                                        ? "memory-select__memory-btn memory-select__memory-btn--active"
                                        : "memory-select__memory-btn"
                                }
                                type="button"
                                onClick={() => memoryList.length > 1 && ProductSelectsState.setSelectedMemory(memory)}

                            >
                                {memory}
                            </button>
                        </li>
                    );
                })}

            </ul>
        </div>
    )
})

export default MemorySelect