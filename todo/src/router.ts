import TodoList from "./TodoList.svelte";
import TodoMaker from "./TodoMaker.svelte";

const routes = {
    "/": TodoList,
    "/w": TodoMaker,
};

export default routes;
