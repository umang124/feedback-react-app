import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({ item }) => {

    const {handleDelete, editFeedback} = useContext(FeedbackContext);



    return (
        <Card>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple" />
            </button>
            <div className='num-display'>
                {item.rating}
            </div>
            <div className='text-display'>
                {item.text}
            </div>

        </Card>
    )
}

export default FeedbackItem