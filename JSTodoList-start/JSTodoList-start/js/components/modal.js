import Alert from './alert.js';

export default class Modal {
    constructor() {
        this.title = document.getElementById("modal-title");
        this.description = document.getElementById("modal-description");
        this.priority = document.getElementById("modal-priority");
        this.priorityValue = document.getElementById("modal-priority-value");
        this.btn = document.getElementById("modal-btn");
        this.completed = document.getElementById("modal-completed");
        this.alert = new Alert('modal-alert');
        this.todo = null;

        this.priority.oninput = () => {
            this.priorityValue.textContent = this.priority.value;
        };
    }

    setValues(todo) {
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.priority.value = todo.priority;
        this.priorityValue.textContent = todo.priority;
        this.completed.checked = todo.completed;
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (this.title.value === '' || this.description.value === '') {
                this.alert.show('Title and description are required');
                return;
            }
            $('#modal').modal('toggle');
            callback(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                priority: this.priority.value,
                completed: this.completed.checked,
            });
        }
    }
}
