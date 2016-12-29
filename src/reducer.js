import ActionTypes from './action-types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
	textInput: '',
	selectedIndex: 0,
	animals: ['Bear']
});

const reducer = (state = initialState, {type, payload}) => {
	console.log(state.toJS());
	switch (type) {
	case ActionTypes.TEXT_INPUT_UPDATE:
		return state.set('textInput', payload);
	case ActionTypes.ANIMAL_SELECT:
		return state.set('selectedIndex', payload);
	case ActionTypes.ANIMAL_ADD:
		return state
			.set('textInput', '')
			.set('animals', state.get('animals').push(payload));
	default:
		console.log('default');
		return state;
	}
}

export default reducer;
