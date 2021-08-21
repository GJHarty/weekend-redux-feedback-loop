import { useHistory } from 'react-router-dom';

function UnderstandingResponse() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/supported');
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <button className="nextPageBtn" onClick={nextPage}>Next</button>
        </>
    )
}

export default UnderstandingResponse;