export interface iTodo {
    id?: number;
    desc?: string;
    name: string;
    date: Date;
    end?: Date;
    favorite?: boolean;
    selected: boolean;
    done?: boolean;
}

export type Todos = iTodo[];

export const SmapleData: iTodo[] = [
    {
        id: 0,
        desc: "1.외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 54000),
        selected: false,
    },
    {
        id: 1,
        desc: "2.외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 24000),
        selected: false,
    },
    {
        id: 2,
        desc: "3.외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 34000),
        selected: false,
    },
    {
        id: 3,
        desc: "4.외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 53000),
        selected: false,
    },
    {
        id: 4,
        desc: "5.외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 59000),
        selected: true,
    },
];
