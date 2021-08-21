function Table() {
    return (
        <>
            <div>
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