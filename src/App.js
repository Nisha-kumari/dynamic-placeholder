import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isFocus: false
    }
  }
  handleFocus = ()=> {
    if(!this.state.isFocus) {
      this.setState({isFocus:true})
    }
  }
  handleBlur = (e)=> {
    if(e.target.value.length < 1) {
      this.setState({isFocus:false})
    }
  }
  render() {
    const {isFocus} = this.state;
    return (
      <div className="App">
        <label className={classNames(`labelStyle ${isFocus ? 'active': ''}`)}>Username</label>
        <input type="text" onFocus={this.handleFocus} onBlur={this.handleBlur} className="inputBox" /> 
      </div>
    );
  }
}

export default App;