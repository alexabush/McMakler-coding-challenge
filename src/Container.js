import React, { Component } from 'react';
import House from './House';
class Container extends Component {
  state = {
    houses: [
      { name: 'Mieten', tagline: 'adipisicing elit.', subtag: 'Lorem ipsum, dolor sit amet consectetur', price: 1.954, address:'3 Zimmer', space: 'ab 35 m^2'},
      { name: 'Mieten', tagline: 'adipisicing elit.', subtag: 'Lorem ipsum, dolor sit amet consectetur', price: 1.954, address:'3 Zimmer', space: 'ab 35 m^2'},
      { name: 'Mieten', tagline: 'adipisicing elit.', subtag: 'Lorem ipsum, dolor sit amet consectetur', price: 1.954, address:'3 Zimmer', space: 'ab 35 m^2'}
    ]
  };

  render() {
    const housesLis = this.state.houses.map(house => {
      return <House name={name} tagline={tagline} subtag={subtag} price={price} address={address} space={space} />
    })
    return (
      <div className="Container">
        <ul>{}</ul>
      </div>
    );
  }
}

export default Container;
 Odit non voluptate mollitia, adipisci dignissimos aut vero quae perferendis, delectus distinctio minus doloremque magnam sint quasi eos explicabo expedita dolorum ut!