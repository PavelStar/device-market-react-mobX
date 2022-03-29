import { IItemData } from '../../../interfaces/IItemData';
import CartState from '../../../store/CartState'
import './Counter.scss'

const Counter = ({ item }: { item: IItemData }) => {

    const { cartItems, priceSum } = CartState;

    const incItem = (item: IItemData) => {

        cartItems.forEach(i => {

            const { priceInfo: { fullPrice, discountAmount }, count } = i

            if (i.id === item.id) {
                i.count++
                CartState.setPriceSum(priceSum + (fullPrice - discountAmount))
            }
        })
    }


    const decItem = (item: IItemData) => {
        cartItems.forEach(i => {
            const { priceInfo: { fullPrice, discountAmount }, count } = i
            if (i.id === item.id) {
                i.count--
                CartState.setPriceSum(priceSum - (fullPrice - discountAmount))
            }
            if (i.count === 0) {
                CartState.setCartItems([...cartItems.filter(cartItem => {
                    return cartItem.id !== item.id
                })])
            }
        })

    }

    return (
        <div className="counter">
            <button className="counter__btn counter__btn--dec"
                onClick={() => decItem(item)}
            >-</button>
            <div className="counter__num">{item.count}</div>
            <button className="counter__btn counter__btn--inc"
                onClick={() => incItem(item)}
            >+</button>
        </div>
    )
}

export default Counter