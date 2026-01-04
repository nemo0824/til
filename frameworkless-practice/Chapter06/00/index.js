import createRouter from "./router.js";
import createPage from "./pages.js";

const container = document.querySelector("main");
const pages = createPage(container);
const router = createRouter();

router
  .addRoute("#/", pages.home)
  .addRoute("#/list", pages.list)
  .setNotFound(pages.notFound)
  .start();

// 메서드 체이닝 패턴
