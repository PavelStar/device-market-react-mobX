import { observer } from "mobx-react-lite";
import LoginPopupState from "../../../store/LoginPopupState";
import UserIcon from "../../svg/UserIcon";
import "./User.scss";
import UserNav from "./UserNav/UserNav";

const User = observer(() => {



    const showPopup = () => {
        LoginPopupState.setShowPopup(true);
    }

    return (

        LoginPopupState.isLoggined
            ?
            <UserNav />
            :
            <a className="user" onClick={showPopup}>
                <UserIcon />
            </a>

    );
});

export default User;
