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

  const removeTodo = (element) => {
    todolist.splice(element, 1);
  };

  return { addTodo, getTodos, removeTodo };
};

export const todolist = TodoList();
