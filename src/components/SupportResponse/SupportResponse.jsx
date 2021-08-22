import React from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';

function SupportedResponse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const answerValue = useSelector(store => store.tableAnswerReducer);

    // on every new page load we need to clear the value of the table
    // this will prevent people from simply using one answer for
    // each component
    // Can remove once input validation is added
    useEffect(() => {
        dispatch({
            type: 'RESET_TABLE_VALUE',
        })
    }, []);

    const submitSupportAnswer = () => {
        if (answerValue === 0 || answerValue === null) {
            alert('Please make a selection before continuing to the next page.');
            return;
        }
        dispatch({
            type: 'ADD_SUPPORT_ANSWER',
            payload: {
                value: answerValue
            }
        });
        history.push('/comment');
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>How well are you feeling supported today?</h1>
            <div>
                <label>Support?</label>
                <Table />
            </div>
            <Button variant="contained" color="default" className="backBtn" onClick={goBack}>Back</Button>
            <Button variant="contained" color="primary" className="nextPageBtn" onClick={submitSupportAnswer}>Next</Button>
        </>
    )
}

export default SupportedResponse;