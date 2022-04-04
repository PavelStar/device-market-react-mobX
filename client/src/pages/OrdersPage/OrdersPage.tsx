import { observer } from "mobx-react-lite";
import BackBtn from "../../components/buttons/BackBtn/BackBtn";
import CatalogLink from "../../components/buttons/CatalogLink/CatalogLink";
import StatusEmptyBlock from "../../components/StatusEmptyBlock/StatusEmptyBlock";
import HistoryIcon from "../../components/svg/HistoryIcon";
import { ICartItem } from "../../interfaces/ICartItem";
import { IItemData } from "../../interfaces/IItemData";
import OrdersPageState from "../../store/OrdersPageState";
import "./OrdersPage.scss";

const OrdersPage = observer(() => {
    const { itemsFromCart, orderSum, orderDate } = OrdersPageState;

    return (
        <div className="order-page">
            <div className="order-page__inner">
                <h1 className="order-page__title section-title">История заказов</h1>
                {!itemsFromCart.length && (
                    <div className="order-page__status-wrap">
                        <div className="order-page__btns-wrap">
                            <CatalogLink btnName="Начать покупки" />
                            <BackBtn btnName="Вернуться назад" />
                        </div>
                        <StatusEmptyBlock title={"Вы пока не делали заказов"} image={<HistoryIcon />} />
                    </div>
                )}

                <ul className="order-page__orders-list orders-list">
                    {itemsFromCart
                        .map((item: ICartItem[], index: number) => {
                            return (
                                <li className="orders-list__item">
                                    <h2 className="orders-list__title">
                                        Заказ №{index + 1}
                                        <p className="orders-list__date">От {orderDate}</p>
                                    </h2>

                                    <ul className="orders-list__order-items-list order-items-list">
                                        {item.map((i: ICartItem) => {
                                            const {
                                                count,
                                                itemData: {
                                                    title,
                                                    brand,
                                                    categoryType,
                                                    color,
                                                    features: { memory },
                                                    images: { snippetImage },
                                                    priceInfo: { fullPrice, discountAmount },
                                                    amount,
                                                },
                                            } = i;

                                            return (
                                                <li className="order-items-list__item">
                                                    <div className="order-items-list__img-wrap">
                                                        <img
                                                            className="order-items-list__img"
                                                            src={snippetImage}
                                                            alt={title}
                                                            width={50}
                                                            height="auto"
                                                        />
                                                    </div>
                                                    <div className="order-items-list__text-wrap">
                                                        <p className="order-items-list__title">
                                                            {`${categoryType} ${title}, ${memory}`}
                                                            <span>{color && `, ${color}`}</span>
                                                        </p>
                                                        <p className="order-items-list__price">
                                                            <span>{count} X {fullPrice - discountAmount} руб.</span>
                                                            <span className="order-items-list__item-total-price">{count * (fullPrice - discountAmount)} руб.</span>
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="orders-list__sum-wrapper">
                                        <p className="orders-list__sum">
                                            <span>Итого: </span> {orderSum} руб.
                                        </p>
                                    </div>
                                </li>
                            );
                        })
                        .reverse()}
                </ul>
            </div>
        </div>
    );
});

export default OrdersPage;
