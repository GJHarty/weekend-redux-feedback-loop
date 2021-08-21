import { useHistory } from 'react-router-dom';

function CommentResponse() {
    const history = useHistory();

    const nextPage = () => {
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
                    />
                </div>
                
            </div>
            <button className="nextPageBtn" onClick={nextPage}>Next</button>
        </>
    )
}

export default CommentResponse;