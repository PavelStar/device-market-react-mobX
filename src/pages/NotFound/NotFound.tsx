import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>страница не найдена</p>
            <Link to="/">на главную</Link>
        </div>
    );
};

export default NotFound;
