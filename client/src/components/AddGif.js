import React, { Component } from 'react';
import Formix from './Formix';
import './css/addgif.css';

class AddGif extends Component {
  render() {
    return (
      <div className="add-gif">
        <Formix />
      </div>
    );
  }
}

export default AddGif;