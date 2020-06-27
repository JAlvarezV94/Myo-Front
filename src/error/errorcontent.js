import React from 'react';
import '../error/errorcontent.css';

function ErrorContent(props){

    return(
        <div className={props.error.showError ? "error-container" : "hide"}>
            <h2>{props.error.errorMessage}</h2>
        </div>
    );
}

export default ErrorContent;