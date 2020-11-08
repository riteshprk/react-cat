import React from 'react';
import {CopyCat} from '../components/CopyCat.js';



export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange(e){
    this.setState({input: e.target.value})
 }

  render() {
    
    this.myvalue = {
    copying: this.state.copying,
    toggleTape: this.toggleTape,
    input: this.state.input,
    handleChange: this.handleChange
    }
    
    return (
      <CopyCat xvalue={this.myvalue}/>
    );
  };
}

