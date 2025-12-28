import getMockTodos from "./getMockTodos.js";
import appView from "./view/app.js";

const state = {
  todos: getMockTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = appView(main, state);
  main.replaceWith(newMain);
});
