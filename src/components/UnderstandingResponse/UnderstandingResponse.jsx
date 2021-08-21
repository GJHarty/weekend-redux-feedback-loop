import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function UnderstandingResponse() {
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

    const submitUnderstandingAnswer = () => {
        dispatch({
            type: 'ADD_UNDERSTANDING_ANSWER',
            payload: {
                value: answerValue
            }
        });
        history.push('/supported');
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <div>
                <label>Understanding?</label>
                <Table />
            </div>
            <button className="nextPageBtn" onClick={submitUnderstandingAnswer}>Next</button>
        </>
    )
}

export default UnderstandingResponse;