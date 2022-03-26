import { IItemData } from '../../../interfaces/IItemData'
import CartState from '../../../store/CartState';
import CloseBtn from '../../svg/CloseBtn';
import Counter from '../Counter/Counter';
import './CartItem.scss'

const CartItem = ({ item }: { item: IItemData }) => {

    const { cartItems, priceSum } = CartState;
    const { title, categoryType, features: { memory }, images, priceInfo: { fullPrice, discountAmount }, count } = item;

    const removeFromCart = (item: IItemData) => {
        const { priceInfo: { fullPrice, discountAmount }, count } = item
        CartState.setCartItems([
            ...cartItems.filter((i) => {
                return i.id !== item.id;
            }),
        ]);

        CartState.setPriceSum(priceSum - (fullPrice - discountAmount) * count)
    };

    return (
        <div className="cart-item">



            <img className="cart-item__img" src={images.snippetImage} alt="img" />

            <div className="cart-item__text-wrap">
                <h3 className="cart-item__title">
                    {`${categoryType} ${title}, ${memory}`}
                </h3>
                <b className="cart-item__price">
                    {/* {fullPrice - discountAmount} руб. */}
                    {/* {(fullPrice - discountAmount)} руб. */}
                </b>
                {count > 1 ? (
                    <b className="cart-item__price">
                        <span className="cart-item__price-count">{(fullPrice - discountAmount)} x {count} </span>
                        <span className="cart-item__total">{(fullPrice - discountAmount) * count} руб.</span>

                    </b>
                ) :
                    <b className="cart-item__price">
                        {/* {fullPrice - discountAmount} руб. */}
                        {(fullPrice - discountAmount)} руб.
                    </b>
                }
            </div>


            <button className="cart-item__delete-btn"
                onClick={() => removeFromCart(item)}
            >
                <CloseBtn />
            </button>
            <div className="cart-item__counter">
                <Counter item={item} />
            </div>
        </div>
    )
}

export default CartItem