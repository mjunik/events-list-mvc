import * as ctrl from './upcoming.controller';

const getUpcomingEvents = () => {
    const events = ctrl.getEvents();
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    return events.slice(0,3);
};

export {getUpcomingEvents}