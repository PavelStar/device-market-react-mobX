import { useEffect, useState } from "react";
import { toJS } from "mobx";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { IItemData } from "../../interfaces/IItemData";
import ItemCard from "../ItemCard/ItemCard";
import "./Slider.scss";
import SwitchBtn from "./SliderButtons/SwitchBtn/SwitchBtn";
import { observer } from "mobx-react-lite";
import DotsBtns from "./SliderButtons/DotsBtns/DotsBtns";
import ResponseDataState from "../../store/ResponseDataState";
import ItemDataState from "../../store/ItemDataState";
import PageWidthState from "../../store/PageWidthState";

interface ISliderItems {
    sliderItems?: IItemData[];
    sectionName?: string;
    slideCount?: number;
}

const Slider: React.FC<ISliderItems> = observer(({ sectionName, slideCount }) => {
    // const toItemPage = new ToItemPage();

    const { responseData } = ResponseDataState
    const { itemCardWidth } = PageWidthState



    const [sliderItems, setSliderItems] = useState<IItemData[]>([])


    useEffect(() => {
        if (sectionName === "popular-items") {
            if (responseData) {
                setSliderItems(responseData?.items.filter((item: IItemData) => {
                    return item.rating > 4.0 && item.isAvailable;
                }))
            }
        }

        if (sectionName === "new-items") {
            if (responseData) {
                setSliderItems(responseData?.items.filter((item: IItemData) => {
                    return item.releaseDate > 2020 && item.isAvailable;
                }))
            }


        }
    }, [responseData?.items]);



    SwiperCore.use([Navigation, Pagination]);


    // let slidesCount
    // (sectionName === "popular-items") ? slidesCount = 2.4 : slidesCount = 4.5

    return (

        <div className="slider-wrapper">
            <Swiper
                loop={true}
                breakpoints={{

                    0: {
                        slidesPerView: 1.1,
                        centeredSlides: false,
                        pagination: {
                            el: `.${sectionName}__dots-pagination`,
                            type: "bullets",
                            clickable: true,
                        },

                        navigation: {
                            nextEl: `.${sectionName}__switch-btn--next`,
                            prevEl: `.${sectionName}__switch-btn--prev`,
                        },

                    },
                    400: {
                        slidesPerView: 1.5,
                        centeredSlides: false,
                        pagination: {
                            el: `.${sectionName}__dots-pagination`,
                            type: "bullets",
                            clickable: true,
                        },

                        navigation: {
                            nextEl: `.${sectionName}__switch-btn--next`,
                            prevEl: `.${sectionName}__switch-btn--prev`,
                        },

                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 10,
                        centeredSlides: false,
                        pagination: {
                            el: `.${sectionName}__dots-pagination`,
                            type: "bullets",
                            clickable: true,
                        },

                        navigation: {
                            nextEl: `.${sectionName}__switch-btn--next`,
                            prevEl: `.${sectionName}__switch-btn--prev`,
                        },
                    },
                    1000: {
                        slidesPerView: 3.2,
                        spaceBetween: 10,
                        centeredSlides: false,
                        // pagination: {
                        //     el: `.${sectionName}__dots-pagination`,
                        //     type: "bullets",
                        //     clickable: true,
                        // },

                        navigation: {
                            nextEl: `.${sectionName}__switch-btn--next`,
                            prevEl: `.${sectionName}__switch-btn--prev`,
                        },
                    },
                }}
            >
                {sliderItems?.map((item: IItemData) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <ItemCard inSliderView="inSliderView" item={item} isBtnLite={true} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <DotsBtns sectionName={sectionName} />
            <SwitchBtn btnType="prev" sectionName={sectionName} />
            <SwitchBtn btnType="next" sectionName={sectionName} />
        </div>
    );
});

export default Slider;


