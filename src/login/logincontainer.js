import React from 'react';
import './logincontainer.css';

export default class LoginContainer extends React.Component
{
    render(){
        return(
            <div className="login-box">
                <form>
                    <label htmlFor="fusername">Username</label>
                    <input type="text" id="fusername" name="fusername"/>
                    <label htmlFor="fpassword">Password</label>
                    <input type="password" id="fpassword" name="fpassword"/>
                    <input className="login-button" type="button" value="login" onClick={() => this.sendCredentials()}/>
                </form>
            </div>
        );
    }


    sendCredentials(){
        var username = document.getElementById("fusername").value;
        var password = document.getElementById("fpassword").value;

        if (typeof username === "undefined" || username === null || username === ""
        || typeof password === "undefined" || password === null || password === "")
        {
            // TODO: Launch error
        }else{
            var data = { 
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({Username: username, Password: password}) };

            fetch("http://localhost:5000/api/v1/auth/login", data)
                .then((response) => {
                    response.json().then(function(innerResponse){
                        if(innerResponse.success){
                            alert("Loged!");
                        }else{
                            // TODO: Show error
                        }
                    });
                })
                .catch((error) => {
                    // TODO: Show error
                });
        }
    }
}