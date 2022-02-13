import { ICategoryPageItem } from '../../interfaces/ICategoryPageItem';
import OrdersPageState from '../../store/OrdersPageState'
import "./OrdersPage.scss"

const OrdersPage = () => {

    const { itemsFromCart } = OrdersPageState;

    return (
        <div className='order-page'>
            <h1 className='order-page__title section-title'>Ваши заказы</h1>
            <ul className='order-page__orders-list orders-list'>
                {itemsFromCart.map((item: any, index: any) => {
                    return (
                        <li className='orders-list__item'>
                            <h2 className='orders-list__title'>Заказ №{index + 1}</h2>
                            <ul className='orders-list__order-items-list order-items-list'>
                                {item.map((i: ICategoryPageItem) => {
                                    return (
                                        <li className='order-items-list__item'>
                                            <p>{i.title}</p>
                                            <p>{i.priceInfo.fullPrice}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                }).reverse()}
            </ul>

        </div>
    )
}

export default OrdersPage