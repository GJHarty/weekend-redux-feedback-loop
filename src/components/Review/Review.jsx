import { useHistory } from 'react-router-dom';

function Review() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/final');
    };

    return (
        <>
            <h1>Review Your Feedback</h1>
            <button className="submitBtn" onClick={nextPage}>Submit</button>
        </>
    )
}

export default Review;