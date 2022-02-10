import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import LoginPopupState from "../../store/LoginPopupState";
import CloseBtn from "../svg/CloseBtn";
import "./LoginPopup.scss";
const LoginPopup = observer(() => {
    const { loginValue, passwordValue, userName, isPassShown } = LoginPopupState;

    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);
    const loginRef: any = useRef(null);

    useEffect(() => {
        if (isPassShown) {
            loginRef.current.focus();
        }
    }, []);

    const closePopup = (e: any) => {
        if (overlayRef.current === e.target || closeBtnRef.current === e.target) {
            LoginPopupState.setShowPopup(false);
        }
    };

    const inputHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === "login-field") {
            LoginPopupState.setLoginValue(e.currentTarget.value);
        }
        if (e.currentTarget.id === "password-field") {
            LoginPopupState.setPasswordValue(e.currentTarget.value);
        }
    };

    const showPassword = () => {
        LoginPopupState.setIsPassShown(!LoginPopupState.isPassShown);
    };

    const userLogIned = () => {
        if (loginValue && passwordValue) {
            LoginPopupState.setLoggined(true);
            LoginPopupState.setUserName(loginValue);
            // LoginPopupState.setShowPopup(false);
        }
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
                    {loginValue && passwordValue && userName ? (
                        <div className="login-popup__success">
                            <p>Вы вошли под именем {userName}</p>
                        </div>
                    ) : (
                        <div className="login-popup__login-wrap">
                            <h3 className="login-popup__title">Войдите под своим именем или зарегистрируйтесь</h3>
                            <div className="login-popup__fields-wrap">
                                <label className="login-popup__input-wrap" htmlFor="login-field">
                                    <b>Логин</b>
                                    <input
                                        ref={loginRef}
                                        className="login-popup__input"
                                        type="text"
                                        onChange={(e) => inputHandleChange(e)}
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
                                        onChange={(e) => inputHandleChange(e)}
                                        value={LoginPopupState.passwordValue}
                                        placeholder="Пример: Password1234"
                                        id="password-field"
                                    />
                                    <label className="login-popup__show-pass-wrap" htmlFor="show-password">
                                        <input
                                            onClick={showPassword}
                                            type="checkbox"
                                            id="show-password"
                                            checked={LoginPopupState.isPassShown ? true : false}
                                        />
                                        <span>Показать пароль</span>
                                    </label>
                                </label>
                            </div>
                            <div className="login-popup__btns-wrap">
                                <button className="login-popup__submit-btn" type="button" onClick={userLogIned}>
                                    Войти
                                </button>
                                <a className="login-popup__registration-btn" type="button">
                                    Зарегистрироваться
                                </a>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
});

export default LoginPopup;
