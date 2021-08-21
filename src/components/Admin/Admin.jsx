import axios from 'axios';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Admin() {
    const [feedback, setFeedback] = useState([]);

    // retrieve data from db on load
    useEffect(() => {
        getFeedbackData();
    }, []);

    const getFeedbackData = () => {
        axios.get('/api/feedback')
            .then(response => {
                console.log(response.data);
                setFeedback(response.data);
            })
            .catch(err => {
                console.error('GET /api/feedback failed', err);
            });
    };

    const deleteFromDb = (event) => {
        console.log('delete');
        axios.delete(`/api/feedback/${event.target.id}`)
            .then(response => {
                getFeedbackData();
            })
            .catch(err => {
                console.error(`DELETE /api/feedback/${event.target.id} failed`, err);
            });
    };

    const flagFeedback = (event) => {
        for (let row of feedback) { // looping through our feedback in order to make sure our id's match
            if (row.id === Number(event.target.id)) { // id check here
                if (!row.flagged) { // here is where we start our database toggle
                    axios.put(`/api/feedback/${event.target.id}`, {flagged: true})
                        .then(response => {
                            getFeedbackData();
                        })
                        .catch(err => {
                            console.error(`PUT /api/feedback/${event.target.id}`, err);
                        });
                } else {
                    axios.put(`/api/feedback/${event.target.id}`, {flagged: false})
                        .then(response => {
                            getFeedbackData();
                        })
                        .catch(err => {
                            console.error(`PUT /api/feedback/${event.target.id}`, err);
                        });
                };
            };
        };
    }; 

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
    });
    const classes = useStyles();

    const rows = feedback;

    // const rows = feedback.map(response => 
    //     {
    //         response.id, 
    //         response.feeling, 
    //         response.understanding, 
    //         response.support, 
    //         response.comments, 
    //         response.flagged, 
    //         response.date
    //     });

    return (
        <>
            <p>localhost:3000/#/admin</p>
            <h1>Admin</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Feeling</TableCell>
                        <TableCell align="right">Comprehension</TableCell>
                        <TableCell align="right">Support</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">Flag</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.id}
                            </TableCell>
                            <TableCell align="right">{row.feeling}</TableCell>
                            <TableCell align="right">{row.understanding}</TableCell>
                            <TableCell align="right">{row.support}</TableCell>
                            <TableCell align="right">{row.comments}</TableCell>
                            <TableCell align="right">
                                <button onClick={flagFeedback}>
                                    {row.flagged ?
                                        <i id={row.id}>&#x2691;</i> :
                                        <i id={row.id}>&#x2690;</i>}
                                </button>
                            </TableCell>
                            <TableCell align="right">
                                <button className="deleteBtn" id={row.id} onClick={deleteFromDb}>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Admin;