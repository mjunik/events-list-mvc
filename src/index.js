import './styles.css';

import * as form from "./app/form/form.controller";
import * as list from './app/list/list.controller';
import * as upcoming from './app/upcoming/upcoming.controller';

form.addSubmitListener();
list.getEventsFromLocalStorage();
upcoming.displayUpcomingEvents();