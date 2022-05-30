export interface iTodo {
    desc?: string;
    name: string;
    date: Date;
    end?: Date;
    important?: boolean;
    done?: boolean;
}

export type Todos = iTodo[];

export const SmapleData: iTodo[] = [
    {
        desc: "외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 54000),
    },
    {
        desc: "외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 54000),
    },
    {
        desc: "외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 54000),
    },
    {
        desc: "외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 54000),
    },
    {
        desc: "외주 개발사 코드 체크 해야 합니다.",
        name: "코드 체크 하기",
        date: new Date(Date.now()),
        end: new Date(Date.now() + 54000),
    },
];
