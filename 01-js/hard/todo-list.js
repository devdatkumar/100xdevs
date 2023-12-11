/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos = [];

  add(todo) {
    this.todos.push(todo);
  }

  getAll() {
    return this.todos;
  }

  remove(index) {
    this.todos.splice(index, 1);
  }

  clear() {
    this.todos = [];
  }

  get(index) {
    return index >= 0 && index < this.todos.length ? this.todos[index] : null;
  }

  update(index, todo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = todo;
    }
  }
}

module.exports = Todo;
