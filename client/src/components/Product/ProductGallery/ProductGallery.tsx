import ImageGallery from "react-image-gallery"
import { IItemData } from "../../../interfaces/IItemData";

const ProductGallery = ({ itemData }: { itemData: IItemData }) => {

    const images = [
        {
            original: `${itemData && itemData.images.snippetImage}`,
            thumbnail: `${itemData && itemData.images.snippetImage}`,
        },
        {
            original: `${itemData && itemData.images.sliderImages[0]}`,
            thumbnail: `${itemData && itemData.images.sliderImages[0]}`,
        },
        {
            original: `${itemData && itemData.images.sliderImages[1]}`,
            thumbnail: `${itemData && itemData.images.sliderImages[1]}`,
        },

        {
            original: `${itemData && itemData.images.sliderImages[2]}`,
            thumbnail: `${itemData && itemData.images.sliderImages[2]}`,
        },
    ];

    return (
        <ImageGallery
            items={images}
            useBrowserFullscreen={false}
            showPlayButton={false}

        />
    )
}

export default ProductGallery