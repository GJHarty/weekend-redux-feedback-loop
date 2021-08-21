import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const response = useSelector(store => store.responseReducer);

    // store all of our answers into our result reducer
    const submitFeedback = () => {
        dispatch({
            type: 'ADD_ALL_FEEDBACK',
            payload: {
                feeling: response.feeling,
                understanding: response.understanding,
                support: response.supported,
                comments: response.comment,
            }
        });
        history.push('/final');
    };

    return (
        <>
            <h1>Review Your Feedback</h1>
            <h2>Feelings: {response.feeling}</h2>
            <h2>Understanding: {response.understanding}</h2>
            <h2>Support: {response.supported}</h2>
            <h2>Comments: {response.comment}</h2>

            <button className="submitBtn" onClick={submitFeedback}>Submit</button>
        </>
    )
}

export default Review;