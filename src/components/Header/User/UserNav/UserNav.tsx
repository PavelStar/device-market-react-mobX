import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import LoginPopupState from '../../../../store/LoginPopupState';
import "./UserNav.scss";

const UserNav = observer(() => {

    const { userName } = LoginPopupState;

    let userRef = useRef(null)

    const [isSettingsHidden, setIsSettingsHidden] = useState(true)


    const openSettings = () => {
        setIsSettingsHidden(!isSettingsHidden)
    }

    const logOut = () => {
        LoginPopupState.setLoginValue("")
        LoginPopupState.setPasswordValue("")
        LoginPopupState.setUserName("")
        LoginPopupState.setLoggined(false)
    }

    return (
        <div className='user-nav'>
            <div className='user-nav__user-wrapper' onClick={openSettings} ref={userRef}>
                <div className='user-nav__avatar'></div>
                <p className='user-nav__user-name'>{userName}</p>
            </div>
            {isSettingsHidden
                ?
                null
                :
                <ul className='user-nav__settings-list settings-list'>
                    <li className='settings-list__item'>
                        <a className='settings-list__link' href="">
                            История заказов
                        </a>
                    </li>
                    <li className='settings-list__item'>
                        <a className='settings-list__link' href="">
                            Настройки профиля
                        </a>
                    </li>
                    <li className='settings-list__item'>
                        <a className='settings-list__link' onClick={logOut}>
                            Выйти
                        </a>
                    </li>
                </ul>
            }

        </div>
    )

})

export default UserNav;
