import { Link } from "react-router-dom";
import ArrowIcon from "../../svg/ArrowIcon";
import "./ToItemLink.scss";

const ToItemLink = () => {
    return (
        <Link to="/item" className="to-item-link__wrap">
            <button className="to-item-link" type="button">
                <span>Подробнее</span>
                <ArrowIcon />
            </button>
        </Link>
    );
};

export default ToItemLink;
