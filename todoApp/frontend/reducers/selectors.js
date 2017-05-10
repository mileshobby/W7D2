
export const allTodos = (state) => {
  return Object.keys(state.todos).map((id)=>{
    return state.todos[id];
  });
};


export const allSteps = (state) => {
  return Object.keys(state.steps).map((id)=> {
    return state.steps[id];
  })
};
