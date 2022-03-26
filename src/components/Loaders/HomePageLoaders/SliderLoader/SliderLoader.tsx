import './SliderLoader.scss'

const SliderLoader = () => {
    return (
        <div className='loader-section'>
            <div className='slider-loader'>
                <div className='slider-loader__title loader-title item'></div>
                <div className='slider-loader__item item'></div>
                <div className='slider-loader__dots item'></div>
            </div>
        </div>
    )
}

export default SliderLoader