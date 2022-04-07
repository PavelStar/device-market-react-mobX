import { Link, useNavigate } from "react-router-dom";
import ArrowIcon from "../../svg/ArrowIcon";
import "./ToItemLink.scss";

const ToItemLink = ({ id }: { id: number }) => {


    const navigate = useNavigate();

    return (
        // <Link to="/item" className="to-item-link__wrap">
        //     <button className="to-item-link" type="button">
        //         <span>Подробнее</span>
        //         <ArrowIcon />
        //     </button>
        // </Link>
        <button className="to-item-link" type="button" onClick={() => navigate(`/item/${id}`)}>
            <span>Подробнее</span>
            <ArrowIcon />
        </button>
    );
}

export default ToItemLink;
