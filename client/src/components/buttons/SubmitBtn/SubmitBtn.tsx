
import './SubmitBtn.scss'

const SubmitBtn = ({ userLogined }: { userLogined: any }) => {

    return (
        <button className="submit-btn" type="button" onClick={userLogined}>
            Войти
        </button>
    )
}

export default SubmitBtn