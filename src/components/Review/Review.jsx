import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

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
                console.log(response);
                clearData();
                history.push('/final');
            })
            .catch(err => {
                console.error('POST /api/feedback failed', err);
            });
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>Review Your Feedback</h1>
            <h2>Feelings: {response.feeling}</h2>
            <h2>Understanding: {response.understanding}</h2>
            <h2>Support: {response.support}</h2>
            <h2>Comments: {response.comments}</h2>

            <Button variant="contained" color="default" className="backBtn" onClick={goBack}>Back</Button>
            <Button variant="contained" color="primary" className="submitBtn" onClick={submitFeedback}>Submit</Button>
        </>
    )
}

export default Review;