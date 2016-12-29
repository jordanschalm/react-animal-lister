import ActionTypes from './action-types';

export const updateTextInput = (text) => ({
	type: ActionTypes.TEXT_INPUT_UPDATE,
	payload: text
});

export const selectAnimal = (index) => ({
	type: ActionTypes.ANIMAL_SELECT,
	payload: index
});

export const addAnimal = (animal) => ({
	type: ActionTypes.ANIMAL_ADD,
	payload: animal
});
