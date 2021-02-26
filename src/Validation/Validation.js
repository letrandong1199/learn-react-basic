import React from 'react';
const Validation = (props) => {
    let validateMessage = "Text too enough";
    if (props.inputLength <= 5) {
        validateMessage = "Text too short !!";
    }
    return (
        <div>
            <p>{validateMessage}</p>
        </div>
    )

}
export default Validation;