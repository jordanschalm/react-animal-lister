import React, { Component, PropTypes } from 'react';
import {addAnimal, selectAnimal, updateTextInput} from './action-creators';
import './AnimalLister.css';

const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;

export default class AnimalLister extends Component {
	state = {textInput: ''};

	static propTypes = {
		// List of animals to appear in the list
		animals: PropTypes.arrayOf(PropTypes.string),
		// Dispatches a Redux action
		dispatch: PropTypes.func,
		// Index of selected animal
		selectedIndex: PropTypes.number,
		// Value of text input field
		textInput: PropTypes.string
	};

	static defaultProps = {
		animals: ['Bear'],
		dispatch: () => {},
		selectedIndex: 0,
		textInput: ''
	};

	render() {
		const { animals, selectedIndex, textInput } = this.props;
		return (
			<div
				className="list-container"
				onKeyDown={this._handleKeyPress}>
				<h1 className="list-header">Animals</h1>
				<div className="list-body">
					{
						animals.map((animal, i) => (
							<a
								className={`list-item${selectedIndex === i ? ' selected' : ''}`}
								key={i}
								onClick={() => this._handleSelectAnimal(i)}>
								{animal}
							</a>
						))
					}
				</div>
				<div className="list-footer">
					<input
						className="list-input"
						autoFocus={true}
						onChange={this._handleChangeTextInput}
						ref={this._alwaysFocusInput}
						type="text"
						value={textInput} />
				</div>
			</div>
		)
	}

	// Handles up/down key movement through the list and adding a new animal with enter.
	_handleKeyPress = (event) => {
		const { animals, dispatch, selectedIndex, textInput } = this.props;
		switch (event.which) {
		case DOWN_KEY:
			if (selectedIndex === animals.length - 1) {
				dispatch(selectAnimal(0));
			} else {
				dispatch(selectAnimal(selectedIndex+1));
			}
			break;
		case UP_KEY:
			if (selectedIndex === 0) {
				dispatch(selectAnimal(animals.length-1));
			} else {
				dispatch(selectAnimal(selectedIndex-1));
			}
			break;
		case ENTER_KEY:
			dispatch(addAnimal(textInput));
			break;
		default:
			return;
		}
	}

	_handleSelectAnimal = (index) => {
		this.props.dispatch(selectAnimal(index))
	}


	_handleChangeTextInput = (event) => {
		this.props.dispatch(updateTextInput(event.target.value));
	}

	// Kepp the input focussed all the time so that we always capture keyboard events
	// in this component.
	_alwaysFocusInput = (el) => {
		el.addEventListener('blur', el.focus);
	}
}
