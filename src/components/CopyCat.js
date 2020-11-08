import React from 'react';
import {divStyles} from '../styles.js';
import {imgStyles} from '../styles.js';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
 
    render(){
    return (
      <div style={divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat</h1>
        <img style={imgStyles}
          alt='cat'
          src={this.props.xvalue.copying ? images.copycat : images.quietcat}
          onClick={this.props.xvalue.toggleTape}
        />
      </div>
    );
  };
};


