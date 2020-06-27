import React from 'react';
import LoginContainer from './login/logincontainer';
import ErrorContent from './error/errorcontent';
import './App.css';

export default class App extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      error: {
        showError: false,
        errorMessage: ""
      }
    }
  }

  render(){
    return (
      <div className="App">
        <ErrorContent error={this.state.error}/>
        <LoginContainer/>
      </div>
    );
  }
}
