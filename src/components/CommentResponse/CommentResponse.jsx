import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function CommentResponse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComment] = useState('');

    useEffect(() => {
        dispatch({
            type: 'RESET_TABLE_VALUE'
        })
    }, []);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const submitComment = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments,
        });
        history.push('/review');
    };

    const goBack = () => {
        history.goBack();
    };


    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <div>
                <label>Comments?</label>
                <div>
                    <input
                        type="text"
                        className="commentInput"
                        placeholder="Write your comment here"
                        value={comments}
                        onChange={handleCommentChange}
                    />
                </div>
                
            </div>
            <Button variant="contained" color="default" className="backBtn" onClick={goBack}>Back</Button>
            <Button variant="contained" color="primary" className="nextPageBtn" onClick={submitComment}>Next</Button>
        </>
    )
}

export default CommentResponse;