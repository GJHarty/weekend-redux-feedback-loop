import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const response = useSelector(store => store.responseReducer);

    // we want to be able to clear out our response reducer once 
    // all of the data has been submitted
    const clearData = () => {
        dispatch({
            type: "CLEAR_RESPONSE_DATA"
        });
    };
    
    const submitFeedback = () => {
        axios.post('/api/feedback', response)
            .then(response => {
                clearData();
                history.push('/final');
            })
            .catch(err => {
                console.error('POST /api/feedback failed', err);
            });
    };

    return (
        <>
            <h1>Review Your Feedback</h1>
            <h2>Feelings: {response.feeling}</h2>
            <h2>Understanding: {response.understanding}</h2>
            <h2>Support: {response.support}</h2>
            <h2>Comments: {response.comments}</h2>

            <button className="submitBtn" onClick={submitFeedback}>Submit</button>
        </>
    )
}

export default Review;