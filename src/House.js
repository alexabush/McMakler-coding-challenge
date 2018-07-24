import React, { Component } from 'react';

class House extends Component {
  state = {};
  render() {
    return (
      <div className="House">
        <h2>{this.props.name}</h2>
        <img src="" alt="" />
        <div>
          <div>
            <h2>{this.props.tagline}</h2>
            <p>{this.props.subtag}</p>
          </div>
          <div>
            <p>{this.props.price}</p>
            <div>
              <p>{this.props.address}</p>
              <p>{this.props.space}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default House;
