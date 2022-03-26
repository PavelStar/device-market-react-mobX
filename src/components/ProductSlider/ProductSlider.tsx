import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { IItemData } from '../../interfaces/IItemData'
import DotsBtns from '../Slider/SliderButtons/DotsBtns/DotsBtns';
import SwitchBtn from '../Slider/SliderButtons/SwitchBtn/SwitchBtn';
import './ProductSlider.scss'

const ProductSlider = ({ product }: { product: IItemData }) => {

    SwiperCore.use([Navigation, Pagination]);

    return (
        <div className="product-slider__slider-wrap">
            <Swiper
                spaceBetween={5}
                slidesPerView={1.1}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    1140: {
                        slidesPerView: 1,
                        pagination: {
                            el: ".product-slider__dots-pagination",
                            type: "bullets",
                            clickable: true,
                        },

                        navigation: {
                            nextEl: ".product-slider__switch-btn--next",
                            prevEl: ".product-slider__switch-btn--prev",
                        },
                    },
                }}
            >
                <SwiperSlide>
                    <div className="product-slider__img-wrap">
                        <img
                            className="product-slider__img"
                            src={product.images.sliderImages[0]}
                            alt="img"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-slider__img-wrap">
                        <img
                            className="product-slider__img"
                            src={product.images.sliderImages[1]}
                            alt="img"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-slider__img-wrap">
                        <img
                            className="product-slider__img"
                            src={product.images.sliderImages[2]}
                            alt="img"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <DotsBtns sectionName="product-slider" />
            <SwitchBtn btnType="prev" sectionName="product-slider" />
            <SwitchBtn btnType="next" sectionName="product-slider" />
        </div>
    )
}

export default ProductSlider