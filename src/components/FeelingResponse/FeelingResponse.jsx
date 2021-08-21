import { useHistory } from 'react-router-dom';
import Table from '../Table/Table';

function FeelingResponse() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/understanding');
    };

    return (
        <>
            <h1>How are you feeling today?</h1>
            <div>
                <label>Feeling?</label>
                <Table />
            </div>
            <button className="nextPageBtn" onClick={nextPage}>Next</button>
        </>
    );
};

export default FeelingResponse;