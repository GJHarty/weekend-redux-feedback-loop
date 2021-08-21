import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';

function FeelingResponse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const answerValue = useSelector(store => store.tableAnswerReducer);

    const submitFeelingAnswer = () => {
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
            <button className="nextPageBtn" onClick={submitFeelingAnswer}>Next</button>
        </>
    );
};

export default FeelingResponse;