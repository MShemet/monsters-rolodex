import { Component } from 'react';
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
