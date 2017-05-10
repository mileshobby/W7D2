import React from 'react';
import TodoDetailViewContainer from "./todo_detail_view_container";

class TodoListItem extends React.Component{
  constructor({todo, removeTodo, receiveTodo}){
    super();
    this.todo = todo;
    this.title = todo.title;
    this.id = todo.id;
    this.removeTodo = removeTodo;
    this.receiveTodo = receiveTodo;
    let done = todo.done === undefined ? false : todo.done;
    this.state = {done: done, detail: false};
    this.changeStatus = this.changeStatus.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeStatus(e){
    e.preventDefault();
    let todo = this.todo;
    todo.done = !this.state.done;
    this.receiveTodo(todo);
    this.setState({done: !(this.state.done)});
  }

  toggleHidden(e){
    e.preventDefault();
    this.setState({detail: !(this.state.detail)});
  }

  deleteItem(e){
    e.preventDefault();
    this.removeTodo(this.id);
  }

  render (){
    let {done} = this.state;
    return (
      <li>
        {this.title}
        <button onClick={this.deleteItem}>Remove Item</button>
        <button onClick={this.changeStatus}>{done ? "undo" : "done"}</button>
        <br></br>
        <button onClick={this.toggleHidden}>Toggle Details</button>
        { this.state.detail ? (<TodoDetailViewContainer todo={this.todo}/>) : ""}
      </li>
    );
  }



}


export default TodoListItem;
