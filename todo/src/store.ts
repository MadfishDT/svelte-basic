import { writable, get } from "svelte/store";
import type { Todos, iTodo } from "./interface";

export const datas = writable<Todos>([]);
export const selected_items = writable<Todos>([]);
export const openNewTodoDialog = writable<boolean>(false);
let todos: Todos = [];

datas.subscribe((value) => {
    todos = value;
});

export const addTodo = (item: iTodo) => {
    const newDatas = [...get(datas)];
    item.id = newDatas.length;
    newDatas.push(item);
    datas.set(newDatas);
};

export const favorite = (item: iTodo) => {
    const current = get(datas);
    const index = current.findIndex((i) => i.id == item.id);
    if (index >= 0) current[index].favorite = true;
    datas.set([...current]);
};

export const checked = (item: iTodo) => {
    const current = get(datas);
    const index = current.findIndex((i) => i.id == item.id);
    if (index >= 0) current[index].selected = true;
    datas.set([...current]);
};

export const openDialog = () => {
    const current = get(openNewTodoDialog);
    if (!current) openNewTodoDialog.set(true);
};

export const closeDialog = () => {
    openNewTodoDialog.set(false);
};
