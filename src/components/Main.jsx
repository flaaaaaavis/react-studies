/* eslint-disable react/jsx-key */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState } from 'react'

import Form from './Form'
import Card from './Card'

function Main () {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [dueDate, setDueDate] = useState('')

	const [cards, setCards] = useState([])

	function handleData (event) {
		const newCard = {
			// eslint-disable-next-line object-shorthand
			title: title,
			// eslint-disable-next-line object-shorthand
			description: description,
			// eslint-disable-next-line object-shorthand
			dueDate: dueDate
		}
		// console.log(newCard)
		// eslint-disable-next-line no-trailing-spaces

		const allCards = cards
		allCards.push(newCard)
		setCards(allCards)

		// console.log(cards)

		clearInput()
	}

	function clearInput () {
		setTitle('')
		setDescription('')
		setDueDate('')
	}

  	return <main>
		<Form
			setTitle={setTitle}
			setDescription={setDescription}
			setDueDate={setDueDate}
			title={title}
			description={description}
			dueDate={dueDate}
			handleData={handleData}
			clearInput={clearInput}
		/>
		<div id="container-content">
			{
				cards.map(
					(card) => <Card
						title={card.title}
						dueDate={card.dueDate}
						description={card.description}
					/>
				)
			}
		</div>
	</main>
}

export default Main
