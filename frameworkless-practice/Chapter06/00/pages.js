export default (container) => {
  const home = () => {
    container.textContent = "This is HomePage";
  };

  const list = () => {
    container.textContent = "This is ListPage";
  };

  const notFound = () => {
    container.textContent = "404 not FoundPage";
  };

  return {
    home,
    list,
    notFound,
  };
};
