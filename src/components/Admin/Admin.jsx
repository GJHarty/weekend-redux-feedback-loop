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

    const deleteFromDb = (event) => {
        axios.delete(`/api/feedback/${Number(event.target.id)}`)
            .then(response => {
                console.log(response);
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
                            console.log(response);
                            getFeedbackData();
                        })
                        .catch(err => {
                            console.error(`PUT /api/feedback/${event.target.id}`, err);
                        });
                } else {
                    axios.put(`/api/feedback/${event.target.id}`, {flagged: false})
                        .then(response => {
                            console.log(response);
                            getFeedbackData();
                        })
                        .catch(err => {
                            console.error(`PUT /api/feedback/${event.target.id}`, err);
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
                                        <IconButton variant="contained" color="secondary" id={row.id} onClick={flagFeedback}>
                                            <FlagIcon />
                                        </IconButton> :
                                        <IconButton variant="contained" color="primary" id={row.id} onClick={flagFeedback}>
                                            <FlagOutlinedIcon />
                                        </IconButton>
                                    }
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="contained" color="secondary" className="deleteBtn" id={row.id} onClick={deleteFromDb}>Delete</Button>
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