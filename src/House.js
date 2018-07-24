import React, { Component } from 'react';
import './House.css';

class House extends Component {
  state = {};
  render() {
    return (
      <div className="House">
        <div className="House__container--image">
          <h2 className="House__h2">{this.props.name}</h2>
          <img className="House__img" src="" alt="" />
        </div>
        <div className="House__container--text">
          <div className="House__container--tags">
            <h2>{this.props.tagline}</h2>
            <p>{this.props.subtag}</p>
          </div>
          <div className="House__container--info">
            <p>{this.props.price} &euro;</p>
            <div className="House__container--additional-info">
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
