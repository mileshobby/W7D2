import React from 'react';

class TodoDetailView extends React.Component {
  constructor({todo, removeTodo}) {
    super();
    this.todo = todo;
    this.removeTodo = removeTodo;
  }

  render(){
    let steps = this.todo.steps || [];
    return (
      <div>
        <ul>
          {steps.map((step, idx)=>(<li key={idx}>{step}</li>))}
        </ul>
      </div>
    );
  }
}

export default TodoDetailView;
