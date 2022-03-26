import './SubmitBtn.scss'

const SubmitBtn = ({ userLogIned }: { userLogIned: any }) => {

    return (
        <button className="submit-btn" type="button" onClick={userLogIned}>
            Войти
        </button>
    )
}

export default SubmitBtn