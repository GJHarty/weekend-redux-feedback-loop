import { useHistory } from 'react-router-dom';

function FeelingResponse() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/understanding');
    };

    return (
        <>
            <h1>How are you feeling today?</h1>
            <button className="nextPageBtn" onClick={nextPage}>Next</button>
        </>
    );
};

export default FeelingResponse;