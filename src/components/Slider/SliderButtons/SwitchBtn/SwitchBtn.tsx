import React from 'react'
import './SwitchBtn.scss'

interface IButtonType {
    btnType?: string,
    sectionName?: string
}

const SwitchBtn: React.FC<IButtonType> = ({ btnType, sectionName }) => {



    return (
        <button className={`${sectionName}__switch-btn ${sectionName}__switch-btn--${btnType} switch-btn switch-btn--${btnType}`}>
            <svg width="15" height="15" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.37999 19.01C0.86999 19.5 1.65999 19.5 2.14999 19.01L10.46 10.7C10.85 10.31 10.85 9.68 10.46 9.29L2.14999 0.980003C1.65999 0.490003 0.86999 0.490003 0.37999 0.980003C-0.11001 1.47 -0.11001 2.26 0.37999 2.75L7.61999 10L0.36999 17.25C-0.11001 17.73 -0.11001 18.53 0.37999 19.01Z"
                    fill="#E5E5E5"
                />
            </svg>
        </button>
    )
}

export default SwitchBtn