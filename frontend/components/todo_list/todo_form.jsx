import React from 'react';
import { uniqueId } from './../../util/util';

class TodoForm extends React.Component {
  constructor({receiveTodo}) {
    super();
    this.state = {inputVal: ''};
    this.updateInput = this.updateInput.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.receiveTodo = receiveTodo;
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.inputVal} onChange={this.updateInput}></input>
        <input type="submit" onClick={this.submitTodo}></input>
      </form>
    );
  }

  submitTodo(e){
    e.preventDefault();
    const todo = {
      title: this.state.inputVal,
      id: uniqueId()
    };
    this.receiveTodo(todo);
    this.setState({inputVal: ''});
  }

  updateInput(e) {
    this.setState({inputVal: e.target.value});
  }


}

export default TodoForm;
