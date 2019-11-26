import * as ctrl from './list.controller';

const displayEvents = () => {
    const listElement = document.getElementById('todo-list');
    listElement.innerHTML = '';
    const events = ctrl.getEvents();
    events.forEach(event => {
        const liElement = document.createElement('li');
        const dateElement = document.createElement('span');
        liElement.innerText = event.title;
        dateElement.innerText = event.date;
        liElement.appendChild(dateElement);
        listElement.appendChild(liElement);
    });
};

export {displayEvents}