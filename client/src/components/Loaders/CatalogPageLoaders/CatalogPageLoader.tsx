import './CatalogPageLoader.scss'

const CatalogPageLoader = () => {
    return (
        <div className='loader-section'>
            <div className='catalog-page-loader__title loader-title item'></div>
            <div className='catalog-page-loader'>
                <div className='catalog-page-loader__filters-bar item'>

                </div>
                <div className='catalog-page-loader__results-list'>
                    <div className='catalog-page-loader__item item'></div>
                    <div className='catalog-page-loader__item item'></div>
                    <div className='catalog-page-loader__item item'></div>
                    <div className='catalog-page-loader__item item'></div>
                    <div className='catalog-page-loader__item item'></div>
                    <div className='catalog-page-loader__item item'></div>
                    <div className='catalog-page-loader__item item'></div>
                </div>

            </div>
        </div>
    )
}

export default CatalogPageLoader