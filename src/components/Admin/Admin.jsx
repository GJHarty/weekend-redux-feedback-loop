import React from 'react';
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
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';

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

    const deleteFromDb = (itemId) => {
        axios.delete(`/api/feedback/${itemId}`)
            .then(response => {
                console.log(response);
                getFeedbackData();
            })
            .catch(err => {
                console.error(`DELETE /api/feedback/${itemId} failed`, err);
            });
    };

    const flagFeedback = (itemId) => {
        for (let row of feedback) { // looping through our feedback in order to make sure our id's match
            if (row.id === itemId) { // id check here
                if (!row.flagged) { // here is where we start our database toggle
                    axios.put(`/api/feedback/${itemId}`, {flagged: true})
                        .then(response => {
                            console.log(response);
                            getFeedbackData();
                        })
                        .catch(err => {
                            console.error(`PUT /api/feedback/${itemId}`, err);
                        });
                } else {
                    axios.put(`/api/feedback/${itemId}`, {flagged: false})
                        .then(response => {
                            console.log(response);
                            getFeedbackData();
                        })
                        .catch(err => {
                            console.error(`PUT /api/feedback/${itemId}`, err);
                        });
                }
            }
        }
    }; 

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
    });
    const classes = useStyles();

    const rows = feedback;

    return (
        <>
            <p>localhost:3000/#/admin</p>
            <h1>Admin</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Feeling</TableCell>
                        <TableCell align="center">Comprehension</TableCell>
                        <TableCell align="center">Support</TableCell>
                        <TableCell align="center">Comments</TableCell>
                        <TableCell align="center">Flag</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} >
                            <TableCell component="th" scope="row">{row.id}
                            </TableCell>
                            <TableCell align="center">{row.feeling}</TableCell>
                            <TableCell align="center">{row.understanding}</TableCell>
                            <TableCell align="center">{row.support}</TableCell>
                            <TableCell align="center">{row.comments}</TableCell>
                            <TableCell align="center">
                                    {row.flagged ? 
                                        <IconButton variant="contained" color="secondary" onClick={() => flagFeedback(row.id)}>
                                            <FlagIcon />
                                        </IconButton> :
                                        <IconButton variant="contained" color="primary" id={row.id} onClick={() => flagFeedback(row.id)}>
                                            <FlagOutlinedIcon />
                                        </IconButton>
                                    }
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="contained" color="secondary" className="deleteBtn" onClick={() => deleteFromDb(row.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Admin;