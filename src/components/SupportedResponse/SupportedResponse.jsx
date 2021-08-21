import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
        dispatch({
            type: 'ADD_SUPPORT_ANSWER',
            payload: {
                value: answerValue
            }
        });
        history.push('/comment');
    };

    return (
        <>
            <h1>How well are you feeling supported today?</h1>
            <div>
                <label>Support?</label>
                <Table />
            </div>
            <button className="nextPageBtn" onClick={submitSupportAnswer}>Next</button>
        </>
    )
}

export default SupportedResponse;