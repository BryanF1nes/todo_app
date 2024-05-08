import { todolist } from "../modules/Todo.js";
import { root } from "./Form.js";

export default function renderTodos() {
  const todolistArray = todolist.getTodos();
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  todolistArray.forEach((todo, index) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    div.classList.add("todo-item");
    div.id = index;

    p.textContent = `${todo.title}, ${todo.description}. - ${todo.dueDate} and ${todo.priority}`;
    deleteBtn.textContent = "Delete";

    if (todo.completed) {
      div.style.textDecoration = "line-through";
    }

    div.addEventListener("click", () => {
      todo.completed = !todo.completed;
      if (todo.completed) {
        p.style.textDecoration = "line-through";
      } else {
        p.style.textDecoration = "none";
      }
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentElement = e.target.parentNode;
      todolist.removeTodo(parentElement.id);
      parentElement.remove();
    });

    div.appendChild(p);
    div.appendChild(deleteBtn);
    todoContainer.appendChild(div);
  });

  const existingTodoContainer = document.querySelector(".todo-container");
  if (existingTodoContainer) {
    existingTodoContainer.replaceWith(todoContainer);
  } else {
    root.appendChild(todoContainer);
  }
}
