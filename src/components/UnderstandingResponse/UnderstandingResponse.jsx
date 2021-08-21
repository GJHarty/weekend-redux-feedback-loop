import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';

function UnderstandingResponse() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/supported');
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <div>
                <label>Understanding?</label>
                <Table />
            </div>
            <button className="nextPageBtn" onClick={nextPage}>Next</button>
        </>
    )
}

export default UnderstandingResponse;