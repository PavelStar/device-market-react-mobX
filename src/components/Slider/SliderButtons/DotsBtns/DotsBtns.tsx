import React from 'react'
import "./DotsBtns.scss"

interface IDotsType {
    btnType?: string,
    sectionName?: string
}

const DotsBtns: React.FC<IDotsType> = ({ sectionName }) => {
    return (
        <button className={`${sectionName}__dots-pagination dots-pagination`}>
        </button>
    )
}

export default DotsBtns