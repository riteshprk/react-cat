import React from 'react';
import {CopyCat} from '../components/CopyCat.js';



export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  render() {
    
    this.myvalue = {
    copying: this.state.copying,
    toggleTape: this.toggleTape
    }
    
    return (
      <CopyCat xvalue={this.myvalue}/>
    );
  };
}

