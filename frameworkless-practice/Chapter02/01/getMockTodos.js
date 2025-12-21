const { faker } = window;

const generateTodos = () => ({
  text: faker.random.words(2),
  completed: faker.random.boolean(),
});

const getTodoArr = (makeTodo, count) => {
  const todos = [];
  for (let i = 0; i < count; i++) {
    todos.push(makeTodo());
  }

  return todos;
};

export default () => {
  const count = faker.random.number(10);
  return getTodoArr(generateTodos, count);
};
