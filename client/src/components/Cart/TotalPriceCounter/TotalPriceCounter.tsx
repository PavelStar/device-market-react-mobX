import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import CartState from '../../../store/CartState'
import './TotalPriceCounter.scss'

const TotalPriceCounter = observer(() => {

    const { cartItems, priceSum } = CartState


    useEffect(() => {
        CartState.setPriceSum(cartItems.reduce((sum, item) => {
            return sum + item.count * (item.itemData.priceInfo.fullPrice - item.itemData.priceInfo.discountAmount)
        }, 0))
    }, [cartItems])



    return (
        <div className='total-price-counter'>
            <p className="total-price-counter__items-count">Итого: </p>
            <b className="total-price-counter__price">{priceSum} руб.</b>
        </div>
    )
})

export default TotalPriceCounter