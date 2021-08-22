/* 
This saves a ton of space in each component. Each radio button will select a value 
which we can send over to our reducer in order to re-use in each component
*/

import { useDispatch } from 'react-redux';
import React from 'react';

// material-ui imports
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';


function Table() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // I need to send the value of this table to the reducer
    const onChangeValue = (event) => {
        dispatch({
            type: 'SUBMIT_TABLE_VALUE',
            payload: event.target.value,
        });
    }

    return (
        <>
            <div onChange={onChangeValue}>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="feeling" name="feeling1" value={value} onChange={handleChange}>
                        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="top"/>
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="top"/>
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="top"/>
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="top"/>
                        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl> 
            </div>
        </>
    )
}

export default Table;