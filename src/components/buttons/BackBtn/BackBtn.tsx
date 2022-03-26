import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './BackBtn.scss'

const BackBtn = ({ btnName }: { btnName: string }) => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <Link className="back-btn" to="#" onClick={goBack}>
            <span>{btnName}</span>
        </Link>
    )
}

export default BackBtn