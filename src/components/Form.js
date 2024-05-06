const root = document.querySelector("#root");

export const createForm = () => {
  const formInputs = ["Title", "Description", "Date"];
  const form = document.createElement("form");

  formInputs.forEach((item) => {
    const label = document.createElement("label");
    const input = document.createElement("Input");

    label.setAttribute("for", item);
    input.setAttribute("name", item);
    input.id = item;

    if (item == "Date") {
      input.setAttribute("type", item);
    } else {
      input.setAttribute("type", "text");
    }

    label.textContent = item;

    form.appendChild(label);
    form.appendChild(input);
  });

  root.appendChild(form);
};
