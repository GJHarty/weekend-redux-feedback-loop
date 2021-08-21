import { useHistory } from 'react-router-dom';

function FinalPage() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/');
    };

    return (
        <>
            <h1>Feedback Submitted</h1>
            <button className="newFeedbackBtn" onClick={nextPage}>Leave New Feedback</button>
        </>
    )
}

export default FinalPage;