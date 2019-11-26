import * as ctrl from './list.controller';

const events = [];

const addEvent = item => {
    events.push(item);
    saveInLocalStorage();
    ctrl.displayEvents();
};

const getEvents = () => events;

const saveInLocalStorage = () =>
    localStorage.setItem('events', JSON.stringify(events));

const getFromLocalStorage = () => {
    const eventsFromLStorage = JSON.parse(localStorage.getItem('events'));
    if(eventsFromLStorage) {
        events.push(...eventsFromLStorage);
        ctrl.displayEvents();
    }
};

export {addEvent, getEvents, getFromLocalStorage}
