import React, { Component } from 'react';
import House from './House';
import axios from 'axios';

class Container extends Component {
  state = {
    houses: []
    // houses: [
    //   {
    //     name: 'Mieten',
    //     tagline: 'adipisicing elit.',
    //     subtag: 'Lorem ipsum, dolor sit amet consectetur',
    //     price: 1.954,
    //     address: '3 Zimmer',
    //     space: 'ab 35 m^2'
    //   },
    //   {
    //     name: 'Mieten',
    //     tagline: 'adipisicing elit.',
    //     subtag: 'Lorem ipsum, dolor sit amet consectetur',
    //     price: 1.954,
    //     address: '3 Zimmer',
    //     space: 'ab 35 m^2'
    //   },
    //   {
    //     name: 'Mieten',
    //     tagline: 'adipisicing elit.',
    //     subtag: 'Lorem ipsum, dolor sit amet consectetur',
    //     price: 1.954,
    //     address: '3 Zimmer',
    //     space: 'ab 35 m^2'
    //   }
    // ]
  };

  async componentDidMount() {
    const rawData = await axios.get(
      'https://api.mcmakler.de/v1/advertisements'
    );
    const data = rawData.data.data;
    debugger;
  }

  render() {
    const housesLis = this.state.houses.map(
      ({ name, tagline, subtag, price, address, space }) => {
        return (
          <House
            name={name}
            tagline={tagline}
            subtag={subtag}
            price={price}
            address={address}
            space={space}
          />
        );
      }
    );
    return (
      <div className="Container">
        <ul>{housesLis}</ul>
      </div>
    );
  }
}

export default Container;
