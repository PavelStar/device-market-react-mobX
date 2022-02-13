import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import CartState from "../../store/CartState";
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.scss";
import { ICategoryPageItem } from "../../interfaces/ICategoryPageItem";
import { toJS } from "mobx";
import OrdersPageState from "../../store/OrdersPageState";


const CartPage: React.FC = observer(() => {
	const { itemsInCart } = CartState;
	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	const [orderSuccess, setOrderSuccess] = useState(false);

	const deleteFromCart = (item: ICategoryPageItem) => {
		CartState.setItemsToCart(
			CartState.itemsInCart.filter((cartItem) => {
				return cartItem.id !== item.id;
			})
		);
		CartState.setPriceSum(CartState.priceSum - (item.priceInfo.fullPrice - item.priceInfo.discountAmount) * item.count)
		item.count = 1
	};

	const incItem = (item: ICategoryPageItem) => {

		itemsInCart.map((i) => {
			if (i.id === item.id) {
				i.count++
				CartState.setPriceSum(CartState.priceSum + (i.priceInfo.fullPrice - i.priceInfo.discountAmount))
			}
		})
	}

	const decItem = (item: ICategoryPageItem) => {
		itemsInCart.map((i: any) => {
			if (i.id === item.id) {
				i.count--
				CartState.setPriceSum(CartState.priceSum - (i.priceInfo.fullPrice - i.priceInfo.discountAmount))
				if (i.count === 0) {
					deleteFromCart(i)
					item.count = 1
				}
			}
		})
	}

	const clearCart = () => {
		CartState.setItemsToCart([])
		CartState.setPriceSum(0)
	}

	const makeOrder = () => {
		OrdersPageState.setItemsFromCart([...OrdersPageState.itemsFromCart, CartState.itemsInCart])
		CartState.setItemsToCart([])
		setOrderSuccess(true)
	}

	return (
		<div className="cart-page">
			{orderSuccess
				?
				<div className="order-success">
					<p>Заказ №{OrdersPageState.itemsFromCart.length} успешно оформлен</p>
					<p>Отследить статус можно в <Link to="/orders-page"><span>истории заказов</span></Link></p>
				</div>
				:
				<div className="cart-page__inner">
					<div className="cart-page__btns-wrap">
						<Link className="cart-page__back-btn" to="#" onClick={goBack}>
							Назад
						</Link>
						{itemsInCart.length > 0 ? <button className="cart-page__clear-btn" onClick={clearCart}>Очистить корзину</button> : null}
					</div>
					<h2 className="cart-page__title section-title">Корзина</h2>
					<ul className="cart-page__list">
						{itemsInCart.length === 0 ? (
							<p>В корзине пока нет товаров</p>
						) : (
							itemsInCart.map((item: ICategoryPageItem) => {
								const { title, images, priceInfo, count } = item;

								return (
									<li className="cart-page__item cart-item">
										<div className="cart-item__info-wrap">
											<div className="cart-item__img-wrap">
												<img className="cart-item__img" src={images.snippetImage} alt="img" />
											</div>
											<div className="cart-item__text-wrap">
												<h3 className="cart-item__title">{title}</h3>
												<b className="cart-item__price">
													{priceInfo.fullPrice - priceInfo.discountAmount}
												</b>
												{count > 1 ? (
													<b className="cart-item__price">
														<span> * {count} = </span>
														{(priceInfo.fullPrice - priceInfo.discountAmount) * count}
													</b>
												) : null}
											</div>
										</div>
										<div className="cart-item__btns-wrap">
											<button className="cart-item__delete-btn" onClick={() => deleteFromCart(item)}>
												Убрать из корзины
											</button>
											<div className="cart-item__counter counter">
												<button className="counter__btn counter__btn--minus" onClick={() => decItem(item)}>-</button>
												<div className="counter__num">{item.count}</div>
												<button className="counter__btn counter__btn--plus" onClick={() => incItem(item)}>+</button>
											</div>
										</div>
									</li>
								);
							})
						)}
					</ul>
					{itemsInCart.length > 0 ? (
						<>
							<div className="cart-page__price-block price-block">
								<p className="price-block__items-count">{CartState.itemsInCart.length} товара на сумму</p>
								<b className="price-block__price">{CartState.priceSum}</b>
							</div>
							<button onClick={makeOrder} className="cart-page__checkout-btn">Оформить</button>
						</>
					) : null}
				</div>
			}

		</div>
	);
});

export default CartPage;
