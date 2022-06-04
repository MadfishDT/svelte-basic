import { writable, get } from "svelte/store";
import type { Todos, iTodo } from "./interface";

export const datas = writable<Todos>([]);
export const selected_items = writable<Todos>([]);

let todos: Todos = [];

datas.subscribe((value) => {
    todos = value;
});

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
