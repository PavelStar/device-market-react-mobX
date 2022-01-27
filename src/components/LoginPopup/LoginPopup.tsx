import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import LoginPopupState from "../../store/LoginPopupState";
import CloseBtn from "../svg/CloseBtn";
import "./LoginPopup.scss";
const LoginPopup = observer(() => {

    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);
    const loginRef: any = useRef(null);

    useEffect(() => {
        loginRef.current.focus();
    }, []);



    const closePopup = (e: any) => {
        if (overlayRef.current === e.target || closeBtnRef.current === e.target) {
            LoginPopupState.showPopup(false);
        }
    };


    const inputHandleChange = (e: any) => {
        if (e.target.id === "login-field") {
            LoginPopupState.setLoginValue(e.target.value)
        }
        if (e.target.id === "password-field") {
            LoginPopupState.setPasswordValue(e.target.value)
        }
    }

    const showPassword = () => {
        LoginPopupState.setIsPassShown(!LoginPopupState.isPassShown);
    };

    return (
        <div className="login-popup">
            <div onMouseDown={(e) => closePopup(e)} ref={overlayRef} className="login-popup__overlay">
                <form className="login-popup__form" action="">
                    <button
                        onMouseDown={(e) => closePopup(e)}
                        ref={closeBtnRef}
                        type="button"
                        className="login-popup__close-btn"
                    >
                        <CloseBtn />
                    </button>
                    <h3 className="login-popup__title">Войдите под своим именем или зарегистрируйтесь</h3>
                    <div className="login-popup__fields-wrap">
                        <label className="login-popup__input-wrap" htmlFor="login-field">
                            <b>Логин</b>
                            <input
                                ref={loginRef}
                                className="login-popup__input"
                                type="text"
                                onChange={e => inputHandleChange(e)}
                                value={LoginPopupState.loginValue}
                                placeholder="Пример: user123"
                                id="login-field"
                            />
                        </label>
                        <label className="login-popup__input-wrap" htmlFor="password-field">
                            <b>Пароль</b>
                            <input
                                className="login-popup__input"
                                type={LoginPopupState.isPassShown ? "text" : "password"}
                                onChange={e => inputHandleChange(e)}
                                value={LoginPopupState.passwordValue}
                                placeholder="Пример: Password1234"
                                id="password-field"
                            />
                            <label className="login-popup__show-pass-wrap" htmlFor="show-password">
                                <input onClick={showPassword} type="checkbox" id="show-password" checked={LoginPopupState.isPassShown ? true : false} />
                                <span>Показать пароль</span>
                            </label>
                        </label>
                    </div>
                    <div className="login-popup__btns-wrap">
                        <button className="login-popup__submit-btn" type="button">
                            Войти
                        </button>
                        <a className="login-popup__registration-btn" type="button">
                            Зарегистрироваться
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default LoginPopup;
