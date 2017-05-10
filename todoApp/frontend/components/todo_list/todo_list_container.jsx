import { connect } from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from './../../reducers/selectors';
import {receiveTodo, removeTodo} from './../../actions/todo_actions';
import {fetchTodos} from './../../actions/todo_actions';
import {createTodo} from './../../actions/todo_actions';
import {receiveErrors} from './../../actions/error_actions';
import {clearErrors} from './../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors())
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
