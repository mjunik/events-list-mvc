import * as model from "./form.model";
import * as view from './form.view';
import * as list from '../list/list.controller';

const addSubmitListener = () => {
    const button = document.querySelector('form button');
    button.addEventListener('click', model.addItem);
};

const addEvent = item => list.addEvent(item);

const resetForm = () => view.resetForm();

export {addSubmitListener, addEvent, resetForm}