import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';

function SupportedResponse() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/comment');
    };

    return (
        <>
            <h1>How well are you feeling supported today?</h1>
            <div>
                <label>Supported?</label>
                <Table />
            </div>
            <button className="nextPageBtn" onClick={nextPage}>Next</button>
        </>
    )
}

export default SupportedResponse;