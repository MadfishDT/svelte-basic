<script lang="ts">
    import Textfield from "@smui/textfield";
    import CharacterCounter from "@smui/textfield/character-counter";
    import Icon from "@smui/textfield/icon";
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import Button, { Label } from "@smui/button";
    import { openNewTodoDialog, closeDialog, addTodo } from "./store";
    import type { iTodo } from "./interface";
    import { debounce } from "lodash";

    let open = false;
    let name = "";
    let desc = "";

    const onAddTodo = () => {
        if (name && name.length > 0) {
            const todo: iTodo = {
                id: 0,
                desc: desc,
                name: name,
                date: new Date(Date.now()),
                selected: false,
            };
            name = "";
            addTodo(todo);
            return true;
        }
        return false;
    };
    const onEnterEvent = debounce((e: CustomEvent) => {
        const ke = e as unknown as KeyboardEvent;
        if (ke.code == "Enter") {
            if (onAddTodo()) closeDialog();
        }
    });
    const onClose = () => {
        name = "";
        desc = "";

        closeDialog();
    };
    openNewTodoDialog.subscribe((value: boolean) => {
        open = value;
    });
</script>

<Dialog
    bind:open
    aria-labelledby="buttons-title"
    aria-describedby="buttons-content"
    autoStackButtons={false}
    on:SMUIDialog:closed={(e) => ($openNewTodoDialog = false)}
>
    <Title id="buttons-title">새로운 할일</Title>
    <Content id="buttons-content" style={"width:400px; padding: 14px"}>
        <Textfield
            variant="outlined"
            bind:value={name}
            label="할일 추가"
            style={"width:100%"}
            on:keydown={onEnterEvent}
        >
            <Icon class="material-icons" slot="leadingIcon">work</Icon>
        </Textfield>
        <div style={"width:100%;height:200px;margin-top:13px"}>
            <Textfield
                style={"width:100%;height:100%"}
                textarea
                variant="outlined"
                input$maxlength={100}
                bind:value={desc}
                on:keydown={onEnterEvent}
                label="설명"
            >
                <CharacterCounter slot="internalCounter"
                    >0 / 100</CharacterCounter
                >
            </Textfield>
        </div>
    </Content>
    <Actions>
        <div class="flexy">
            <div>
                <Button on:click={onAddTodo}>
                    <Label>적용</Label>
                </Button>
            </div>
            <div>
                <Button on:click={closeDialog}>
                    <Label>닫기</Label>
                </Button>
            </div>
        </div>
    </Actions>
</Dialog>

<style>
    .flexy {
        display: flex;
        flex-wrap: wrap;
    }
</style>
