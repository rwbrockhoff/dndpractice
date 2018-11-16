import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
const update = require('immutability-helper')

class App extends Component {
  state = {
    cards: [
			{
				id: 1,
				text: 'Write a cool JS library',
			},
			{
				id: 2,
				text: 'Make it generic enough',
			},
			{
				id: 3,
				text: 'Write README',
			},
			{
				id: 4,
				text: 'Create some examples',
			},
			{
				id: 5,
				text:
					'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
			},
			{
				id: 6,
				text: '???',
			},
			{
				id: 7,
				text: 'PROFIT',
			},
		]
  }

  moveCard = (dragIndex, hoverIndex) => {
		const { cards } = this.state
		const dragCard = cards[dragIndex]

		this.setState(
			update(this.state, {
				cards: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
				},
			}),
		)
	}

  
  render() {
    return (
      <div className="App center">

          <div className="list-box cen ter">

              { this.state.cards.map((card,i) => (
                  <Card
                  key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.moveCard}
                  />
              ))}

          </div>
                  
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)
