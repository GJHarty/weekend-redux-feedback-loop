import axios from 'axios';
import { useEffect, useState } from 'react';

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
        for (let row of feedback) {
            if (row.id === Number(event.target.id)) {
                if (!row.flagged) {
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
                }
            }
        }
    }; 

    return (
        <>
            <p>localhost:3000/#/admin</p>
            <h1>Admin</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flag</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback.map(response => (
                            <tr key={response.id}>
                                <td>{response.feeling}</td>
                                <td>{response.understanding}</td>
                                <td>{response.support}</td>
                                <td>{response.comments}</td>
                                <td>
                                    <button onClick={flagFeedback}>
                                        {response.flagged ?
                                            <i id={response.id}>&#x2691;</i> :
                                            <i id={response.id}>&#x2690;</i>}
                                    </button>
                                </td>
                                <td>
                                    <button className="deleteBtn" id={response.id} onClick={deleteFromDb}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Admin;