import { observer } from "mobx-react-lite";
import React, { RefObject, useEffect, useRef, useState } from "react";
import LoginState from "../../store/LoginState";
import CloseBtn from "../svg/CloseBtn";
import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn";
import { ScrollLockOnFixed } from "../../Utils/ScrollLockOnFixed";
import "./LoginPopup.scss";


const LoginPopup = observer(({ headerRef }: { headerRef: RefObject<HTMLDivElement> }) => {

    const { userName, userPassword, isPopupShown } = LoginState

    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);
    const loginRef: any = useRef(null);
    const loginPopupRef = useRef(null);

    const [isPassShown, setIsPassShown] = useState(false)
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')



    useEffect(() => {

        if (headerRef) {

            ScrollLockOnFixed("disabled", headerRef)
        }

        return () => {
            ScrollLockOnFixed("enabled", headerRef)
        }
    }, [])


    useEffect(() => {
        if (isPopupShown) {
            loginRef.current.focus();
        }

    }, [isPopupShown]);

    const closePopup = (e: any) => {
        if (overlayRef.current === e.target || closeBtnRef.current === e.target) {
            LoginState.setIsPopupShown(!isPopupShown);
        }
    };

    const inputHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === "login-field") {
            setLoginValue(e.currentTarget.value);
        }
        if (e.currentTarget.id === "password-field") {
            setPasswordValue(e.currentTarget.value);
        }
    };

    const showPassword = () => {
        setIsPassShown(!isPassShown);
    };

    const userLogIned = () => {
        if (loginValue && passwordValue) {
            LoginState.setUserName(loginValue)
            LoginState.setUserPassword(passwordValue)
        }
    };

    const onOverlayClick = (e: any) => {
        if (e.target === overlayRef.current) {
            LoginState.setIsPopupShown(!isPopupShown)
        }
    }




    return (
        <div className="login-popup" >
            <div ref={overlayRef} className="login-popup__overlay"
                onClick={onOverlayClick}
            >
                <form className="login-popup__form" ref={loginPopupRef}>
                    <button
                        onClick={(e) => closePopup(e)}
                        ref={closeBtnRef}
                        type="button"
                        className="login-popup__close-btn"
                    >
                        <CloseBtn />
                    </button>
                    {userName && userPassword ? (
                        <div className="login-popup__success">
                            <p>Вы вошли под именем {userName}</p>
                        </div>
                    ) : (
                        <div className="login-popup__login-wrap">
                            <h3 className="login-popup__title">Вход</h3>
                            <div className="login-popup__fields-wrap">
                                <label className="login-popup__input-wrap" htmlFor="login-field">
                                    <b>Логин:</b>
                                    <input
                                        ref={loginRef}
                                        className="login-popup__input"
                                        type="text"
                                        onChange={(e) => inputHandleChange(e)}
                                        value={loginValue}
                                        placeholder="Пример: user123"
                                        id="login-field"
                                    />
                                </label>
                                <label className="login-popup__input-wrap" htmlFor="password-field">
                                    <b>Пароль:</b>
                                    <input
                                        className="login-popup__input"
                                        type={isPassShown ? "text" : "password"}
                                        onChange={(e) => inputHandleChange(e)}
                                        value={passwordValue}
                                        placeholder="Пример: Password1234"
                                        id="password-field"
                                    />
                                    <label className="login-popup__show-pass-wrap" htmlFor="show-password">
                                        <input
                                            onClick={showPassword}
                                            type="checkbox"
                                            id="show-password"
                                            checked={isPassShown}
                                            onChange={() => setIsPassShown(!isPassShown)}
                                        />
                                        <span>Показать пароль</span>
                                    </label>
                                </label>
                            </div>
                            <div className="login-popup__btns-wrap">
                                <SubmitBtn userLogIned={userLogIned} />
                                {/* <a className="login-popup__registration-btn" type="button">
                                    Зарегистрироваться
                                </a> */}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
});

export default LoginPopup