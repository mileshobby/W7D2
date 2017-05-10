import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    // this.todos = this.props.todos;
    this.createTodo = this.props.createTodo;
    this.removeTodo = this.props.removeTodo;
    this.fetchTodos = this.props.fetchTodos;
    this.receiveErrors = this.props.receiveErrors;
    this.clearErrors = this.props.clearErrors;
  }

  componentDidMount () {
    this.fetchTodos();
  }

  render() {
    return(
    <div>
      <ul>
        {this.props.todos.map((todo, idx) =>
          <TodoListItem
            removeTodo={this.removeTodo}
            todo={todo}
            key={todo.id}
            createTodo={this.createTodo}
          />
        )}
      </ul>
      <TodoForm createTodo={this.createTodo}
        receiveErrors={this.receiveErrors}
        clearErrors={this.clearErrors}
      />
    </div>
  );}
}
export default TodoList;
