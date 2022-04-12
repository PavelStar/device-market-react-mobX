import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginState from '../../../../store/LoginState';
import UserIcon from '../../../svg/UserIcon';
// import LoginPopupState from '../../../../store/LoginPopupState';
import "./UserNav.scss";
import NavBarItem from '../../NavBarItem/NavBarItem';

const UserNav = observer(() => {

    const { userName, userPassword, isPopupShown } = LoginState;

    let settingsListRef = useRef(null)

    const [isSettingsShown, setIsSettingsShown] = useState(false)

    useEffect(() => {

        if (settingsListRef.current) {
            document.addEventListener('click', outsideClick)
            console.log('')
        }

        return () => {
            document.removeEventListener('click', outsideClick)
        }
    }, [isSettingsShown])

    const outsideClick = (e: any) => {
        if (e.currentTarget !== settingsListRef.current) {
            setIsSettingsShown(false)
        }
    }

    const openSettings = (e: any) => {
        setIsSettingsShown(!isSettingsShown)
    }

    const logOut = () => {
        LoginState.setUserName('')
        LoginState.setUserPassword('')
        LoginState.setIsPopupShown(!isPopupShown)

    }

    return (
        <div className='user-nav'>
            <div className='user-nav__user-wrapper'
                onClick={openSettings}
            >
                <NavBarItem itemIcon={<UserIcon />} itemName={userName} />
            </div>
            {isSettingsShown &&
                <ul ref={settingsListRef} className='user-nav__settings-list settings-list'>
                    <li className='settings-list__item'>
                        <Link className='settings-list__link' to="/orders-page">
                            История заказов
                        </Link>
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
