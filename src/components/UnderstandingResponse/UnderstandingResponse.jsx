import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';

function UnderstandingResponse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const answerValue = useSelector(store => store.tableAnswerReducer);

    // on every new page load we need to clear the value of the table
    // this will prevent people from simply using one answer for
    // each component
    useEffect(() => {
        dispatch({
            type: 'RESET_TABLE_VALUE',
        })
    }, []);

    const submitUnderstandingAnswer = () => {
        if (answerValue === 0 || answerValue === null) {
            alert('Please make a selection before continuing to the next page.');
            return;
        }
        dispatch({
            type: 'ADD_UNDERSTANDING_ANSWER',
            payload: {
                value: answerValue
            }
        });
        history.push('/supported');
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <div>
                <label>Understanding?</label>
                <Table />
            </div>
            <Button variant="contained" color="default" className="backBtn" onClick={goBack}>Back</Button>
            <Button variant="contained" color="primary" className="nextPageBtn" onClick={submitUnderstandingAnswer}>Next</Button>  
        </>
    )
}

export default UnderstandingResponse;