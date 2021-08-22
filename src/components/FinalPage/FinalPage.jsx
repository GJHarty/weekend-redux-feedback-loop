import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function FinalPage() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/');
    };

    return (
        <>
            <h1>Feedback Submitted</h1>
            <Button variant="contained" color="primary" className="newFeedbackBtn" onClick={nextPage}>Leave New Feedback</Button>
        </>
    )
}

export default FinalPage;