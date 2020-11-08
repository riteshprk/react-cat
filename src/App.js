import React from 'react';
import './App.css';

export class App extends React.Component {
	constructor(props){
	super(props);
	this.state = {message: 0};
	this.userInput = this.userInput.bind(this);
	};
	userInput(e){
	this.setState({message: this.state.message + 1});
		
	}
  render() {
	return (
	<div>
	
	<button onClick={this.userInput}>Click Me </button>
	<h1> {this.state.message} </h1>
	</div>
	);
  
  }
}


