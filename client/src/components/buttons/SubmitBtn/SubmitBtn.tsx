import { addUserToDB } from '../../../Utils/addUserToDB'
import './SubmitBtn.scss'

const SubmitBtn = ({ userLogIned }: { userLogIned: any }) => {

    return (
        <button className="submit-btn" type="button" onClick={userLogIned}>
            {/* <button className="submit-btn" type="button" onClick={() => addUserToDB('pavel@mail.ru', 'asdasdasd')}> */}
            Войти
        </button>
    )
}

export default SubmitBtn