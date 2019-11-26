import * as ctrl from './form.controller';

const addItem = () => {
    const titleInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('todo-date');

    ctrl.addEvent({
        title: titleInput.value,
        date: dateInput.value
    });

    ctrl.resetForm();
};

export {addItem}
