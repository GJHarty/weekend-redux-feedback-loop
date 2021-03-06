import React from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function FeelingResponse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const answerValue = useSelector(store => store.tableAnswerReducer);

    const submitFeelingAnswer = () => {
        if (answerValue === 0 || answerValue === null) {
            alert('Please make a selection before continuing to the next page.');
            return;
        }
        dispatch({
            type: 'ADD_FEELING_ANSWER',
            payload: {
                value: answerValue
            }
        });
        history.push('/understanding');
    };

    return (
        <>
            <h1>How are you feeling today?</h1>
            <div>
                <label>Feeling?</label>
                <Table 
                    submitFeelingAnswer={submitFeelingAnswer}
                />
            </div>
            <Button variant="contained" color="primary" className="nextPageBtn" onClick={submitFeelingAnswer}>Next</Button>
        </>
    );
}

export default FeelingResponse;