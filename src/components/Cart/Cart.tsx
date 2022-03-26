import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { IItemData } from "../../interfaces/IItemData";
import CartState from "../../store/CartState";
import OrdersPageState from "../../store/OrdersPageState";
import EmptyCart from "../../components/svg/EmptyCart";
import CatalogLink from "../../components/buttons/CatalogLink/CatalogLink";
import CartItem from "../../components/Cart/CartItem/CartItem";
import "./Cart.scss";
import StatusEmptyBlock from "../StatusEmptyBlock/StatusEmptyBlock";
import BackBtn from "../buttons/BackBtn/BackBtn";
import ClearCartBtn from "../buttons/ClearCartBtn/ClearCartBtn";

const Cart = observer(() => {
    const { cartItems, priceSum } = CartState;
    const { itemsFromCart } = OrdersPageState;
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const [isOrderSuccess, setIsOrderSuccess] = useState(false);



    const makeOrder = () => {
        OrdersPageState.setItemsFromCart([...itemsFromCart.concat([CartState.cartItems])]);
        OrdersPageState.setOrderSum(priceSum);
        setIsOrderSuccess(true);
        CartState.setCartItems([]);
        CartState.setPriceSum(0);
        OrdersPageState.setOrderDate(new Date().toLocaleDateString());
        window.scrollTo(0, 0);
    };

    return (
        <div className="cart">
            {isOrderSuccess ? (
                <div className="order-success">
                    <p className="order-success__title">
                        Заказ №{OrdersPageState.itemsFromCart.length} успешно оформлен
                    </p>
                    <p className="order-success__description">
                        Отследить статус можно в
                        <Link to="/orders-page">
                            <span className="order-success__link">Истории заказов</span>
                        </Link>
                    </p>
                    <div className="order-success__btns-wrap">
                        <Link to="/orders-page">
                            <button className="order-success__to-order-btn stroked-btn">К заказу</button>
                        </Link>
                        <CatalogLink btnName="Продолжить покупки" />
                    </div>
                </div>
            ) : (
                <div className="cart__inner">
                    <h2 className="cart__title section-title">Корзина</h2>
                    <div className="cart__btns-wrap">
                        <BackBtn btnName="Вернуться назад" />
                        {cartItems.length > 0 ? (
                            <ClearCartBtn />
                        ) : <CatalogLink btnName="Перейти в каталог" />}
                    </div>
                    <ul className="cart__list">
                        {cartItems.length === 0 ? (
                            <StatusEmptyBlock title={"В корзину ничего не добавлено"} image={<EmptyCart />} />
                        ) : (
                            cartItems.map((item: IItemData) => {
                                return (
                                    <li>
                                        <CartItem item={item} />
                                    </li>
                                );
                            })
                        )}
                    </ul>
                    {cartItems.length > 0 ? (
                        <>
                            <div className="cart__price-block total-price-block">
                                <p className="total-price-block__items-count">Итого: </p>
                                <b className="total-price-block__price">{CartState.priceSum} руб.</b>
                            </div>
                            <button onClick={makeOrder} className="cart__checkout-btn">
                                Оформить
                            </button>
                        </>
                    ) : null}
                </div>
            )}
        </div>
    );
});

export default Cart;
