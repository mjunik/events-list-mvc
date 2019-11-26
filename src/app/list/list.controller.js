import * as model from './list.model';
import * as view from './list.view';

const addEvent = item => model.addEvent(item);

const getEvents = () => model.getEvents();

const displayEvents = () => view.displayEvents();

const getEventsFromLocalStorage = () => model.getFromLocalStorage();

export {addEvent, getEvents, displayEvents, getEventsFromLocalStorage}
