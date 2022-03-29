import './CategoriesLoader.scss'

const CategoriesLoader = () => {
    return (
        <div className='loader-section'>
            <div className='loader-title item'></div>
            <ul className='categories-loader'>
                <li className='categories-loader__item item'></li>
                <li className='categories-loader__item item'></li>
                <li className='categories-loader__item item'></li>
                <li className='categories-loader__item item'></li>
            </ul>
        </div>
    )
}

export default CategoriesLoader