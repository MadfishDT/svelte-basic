import { writable } from "svelte/store";
import type { Todos } from "./interface";

export const datas = writable<Todos>([]);
