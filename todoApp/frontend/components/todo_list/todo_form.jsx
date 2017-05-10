import React from 'react';

class TodoForm extends React.Component {
  constructor({createTodo, clearErrors, receiveErrors}) {
    super();
    this.state = {titleVal: '', bodyVal: ''};
    this.handleChange = this.handleChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.createTodo = createTodo;
    this.receiveErrors = receiveErrors;
    this.clearErrors = clearErrors;
  }

  render() {
    return (
      <form>
        <input name="todo[title]"type="text" value={this.state.titleVal} onChange={this.handleChange('titleVal')}></input>
        <textarea name="todo[body]" value={this.state.bodyVal} onChange={this.handleChange('bodyVal')}></textarea>
        <input type="submit" onClick={this.submitTodo}></input>
      </form>
    );
  }

  submitTodo(e){
    e.preventDefault();
    const todo = {
      title: this.state.titleVal,
      body: this.state.bodyVal,
    };
    this.createTodo(todo)
      .then(()=>{
        return this.setState({titleVal: '', bodyVal: ''});
      })
      // .then(this.clearErrors())
      ;
  }

  handleChange(key) {
    return (event) => {
      this.setState( {[key]: event.currentTarget.value} );
    };
  }


}

export default TodoForm;
