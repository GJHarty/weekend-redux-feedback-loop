import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
            <button className="nextPageBtn" onClick={submitComment}>Next</button>
        </>
    )
}

export default CommentResponse;