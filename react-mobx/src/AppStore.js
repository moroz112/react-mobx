import { autorun, observable, action, computed } from 'mobx';

class ToDoStore {
	@observable todoList = ['todo1', "todo2", "todo3"];
	@observable filter = "";

	@action('create new todo list item')
	createNew(value) {
		this.todoList.push(value)
	}
}

var store = window.store = new ToDoStore;

export default store;

autorun(() => {
	console.log(store.filter)
	console.log(store.todoList)
});