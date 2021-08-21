import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, makeStyles } from '@material-ui/core';


function CommentResponse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComment] = useState('');

    useEffect(() => {
        dispatch({
            type: 'RESET_TABLE_VALUE'
        })
    }, []);

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    }));
    const classes = useStyles();

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
                <form className={classes.root} noValidate autoComplete="off" onChange={handleCommentChange}>
                    <TextField value={comments} id="standard-basic" label="Write your comments here" />
                </form>
            </div>
            <Button variant="contained" color="default" className="backBtn" onClick={goBack}>Back</Button>
            <Button variant="contained" color="primary" className="nextPageBtn" onClick={submitComment}>Next</Button>
        </>
    )
}

export default CommentResponse;