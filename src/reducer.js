import ActionTypes from './action-types';

const initialState = {
	textInput: '',
	selectedIndex: 0,
	animals: []
};

// Redux reducer to add and select animals.
const reducer = (state = initialState, {type, payload}) => {
	const nextState = Object.assign({}, state);
	switch (type) {
	case ActionTypes.TEXT_INPUT_UPDATE:
		nextState.textInput = payload;
		return nextState;
	case ActionTypes.ANIMAL_SELECT:
		nextState.selectedIndex = payload;
		return nextState;
	case ActionTypes.ANIMAL_ADD:
		nextState.textInput = '';
		nextState.animals = [...nextState.animals, payload];
		return nextState;
	default:
		return nextState;
	}
}

export default reducer;
