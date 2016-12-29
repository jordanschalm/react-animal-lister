import React, { Component, PropTypes } from 'react';
import {addAnimal, selectAnimal, updateTextInput} from './action-creators';
import './AnimalLister.css';

const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;

export default class AnimalLister extends Component {
	state = {textInput: ''};

	static propTypes = {
		animals: PropTypes.arrayOf(PropTypes.string),
		dispatch: PropTypes.func,
		selectedIndex: PropTypes.number,
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
				onKeyUp={this._handleKeyPress}>
				<h1 className="list-header">Animals</h1>
				<div className="scrollable">
					{
						animals.map((animal, i) => (
							<a
								className={`list-item ${selectedIndex === i ? 'selected' : ''}`}
								key={i}
								onClick={() => this._handleSelectAnimal(i)}>
								{animal}
							</a>
						))
					}
				</div>
				<div className="list-footer">
					<input
						type="text"
						value={textInput}
						onChange={this._handleChangeTextInput} />
				</div>
			</div>
		)
	}

	_handleSelectAnimal = (index) => {
		this.props.dispatch(selectAnimal(index))
	}

	// TODO
	_handleKeyPress = (event) => {
		const { animals, dispatch, selectedIndex, textInput } = this.props;
		switch (event.which) {
		case UP_KEY:
			if (selectedIndex === animals.length - 1) {
				dispatch(selectAnimal(0));
			} else {
				dispatch(selectAnimal(selectedIndex+1));
			}
			break;
		case DOWN_KEY:
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

	_handleChangeTextInput = (event) => {
		this.props.dispatch(updateTextInput(event.target.value));
	}
}
