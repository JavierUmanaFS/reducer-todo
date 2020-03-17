
export const initialState = [
  {
    task: 'Walk Dog',
    id: 139243458934,
    completed: false
  },
  {
    task: 'Read Book',
    id: 23902354939,
    completed: false
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          task: action.payload,
          id: new Date(),
          completed: false
        }
      ];
    case 'TOGGLE_COMPLETED':
      return (state.map(todo => {
        if (todo.id === action.payload) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      }))
    case 'CLEAR_COMPLETED':
      return (state.filter(todo => {
        return todo.completed === false;
      }));
    default:
      return state;
  }
}