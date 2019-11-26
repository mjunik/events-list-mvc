import * as ctrl from "./upcoming.controller";

const displayUpcomingEvents = () => {
    const listElement = document.getElementById('todo-upcoming');
    listElement.innerHTML = '';
    const events = ctrl.getUpcomingEvents();
    events.forEach(event => {
        const liElement = document.createElement('li');
        const dateElement = document.createElement('span');
        liElement.innerText = event.title;
        dateElement.innerText = event.date;
        liElement.appendChild(dateElement);
        listElement.appendChild(liElement);
    });
};

export {displayUpcomingEvents}