import getMockTodos from "./getMockTodos.js";
import view from "./view.js";

const state = {
  todos: getMockTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
