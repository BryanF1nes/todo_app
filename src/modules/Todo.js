export const Todo = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

export const TodoList = () => {
  const todolist = [];

  const addTodo = (todo, project) => {
    todolist.push(todo);
    return;
  };

  const getTodos = () => {
    console.log(todolist);
  };

  return { addTodo, getTodos };
};
