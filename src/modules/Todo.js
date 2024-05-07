export const Todo = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const TodoList = () => {
  const todolist = [];

  const addTodo = (todo, project) => {
    todolist.push(todo);
    return;
  };

  const getTodos = () => {
    return todolist;
  };

  return { addTodo, getTodos };
};

export const todolist = TodoList();
