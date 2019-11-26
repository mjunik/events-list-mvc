import * as list from '../list/list.controller'
import * as model from './upcoming.model'
import * as view from './upcoming.view'

const getEvents = () => list.getEvents();

const getUpcomingEvents = () => model.getUpcomingEvents();

const displayUpcomingEvents = () => view.displayUpcomingEvents();

export {getEvents, getUpcomingEvents, displayUpcomingEvents}