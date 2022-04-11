import { IItemData } from '../../interfaces/IItemData'
import './ProductTitle.scss'

const ProductTitle = ({ itemData }: { itemData: IItemData }) => {

    const { categoryType, title, color, features: { memory } } = itemData

    console.log()

    return (
        <h3 className="product-title">
            <span>{categoryType} </span>
            <span>{title} </span>
            {color ? <span>, {color}</span> : null}
            {memory ? <span>, {memory}</span> : null}
        </h3>
    )
}

export default ProductTitle