import { useDispatch } from 'react-redux';

function Table({
    submitFeelingAnswer
}) {
    const dispatch = useDispatch();

    // I need to send the value of this table to the reducer
    const onChangeValue = (event) => {
        console.log(event.target.value);
        dispatch({
            type: 'SUBMIT_TABLE_VALUE',
            payload: event.target.value,
        });
    }

    return (
        <>
            <div onChange={onChangeValue}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="radio" value="1" name="feeling" />
                            </td>
                            <td>
                                <input type="radio" value="2" name="feeling" />
                            </td>
                            <td>
                                <input type="radio" value="3" name="feeling" />
                            </td>
                            <td>
                                <input type="radio" value="4" name="feeling" />
                            </td>
                            <td>
                                <input type="radio" value="5" name="feeling" />
                            </td>
                        </tr>
                    </tbody>
                </table>  
            </div>
        </>
    )
}

export default Table;