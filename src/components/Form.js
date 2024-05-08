import { Todo, todolist } from "../modules/Todo.js";
import { logMessage } from "../modules/logging.js";
import renderTodos from "./RenderTodo.js";

export const root = document.querySelector("#root");

export const createForm = () => {
  const formInputs = ["Title", "Description", "Date"];
  const priorityList = ["Low", "Medium", "High"];
  const select = document.createElement("select");
  const button = document.createElement("button");
  const form = document.createElement("form");

  form.classList.add("add-todo");
  button.setAttribute("type", "submit");
  select.id = "Priority";
  button.textContent = "Submit";

  formInputs.forEach((item) => {
    const input = document.createElement("Input");
    input.setAttribute("name", item);
    input.setAttribute("placeholder", item);
    input.id = item;

    if (item === "Date") {
      input.removeAttribute("placeholder");
      input.setAttribute("type", item);
    } else {
      input.setAttribute("type", "text");
    }
    form.appendChild(input);
  });

  priorityList.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;

    select.appendChild(option);
  });

  form.appendChild(select);
  form.appendChild(button);

  form.addEventListener("submit", formhandler);
  form.reset();

  root.appendChild(form);
};

const formhandler = (e) => {
  e.preventDefault();
  const form = document.querySelector(".add-todo");
  const title = document.querySelector("#Title").value;
  const description = document.querySelector("#Description").value;
  const date = document.querySelector("#Date").value;
  const priority = document.querySelector("#Priority").value;
  const todo = Todo(title, description, date, priority);
  todolist.addTodo(todo);
  logMessage(`Todo added successfully...`);
  renderTodos();
  form.reset();
};
