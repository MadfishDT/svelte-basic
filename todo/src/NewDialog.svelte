<Dialog
  bind:open
  aria-labelledby="buttons-title"
  aria-describedby="buttons-content"
  autoStackButtons={false}
  on:SMUIDialog:closed={(e) => (buttoned = e.detail.action)}
>
  <Title id="buttons-title">새로운 할일</Title>
  <Content id="buttons-content" style={"width:400px; padding: 14px"}>
    <Textfield variant="outlined" bind:value={content} label="할일 추가" style={"width:100%"} on:keydown={onAddTodo}>
        <Icon class="material-icons" slot="leadingIcon">work</Icon>
      </Textfield>
    </Content>
  <Actions>
    <Button on:click={closeDialog}>
      <Label>닫기</Label>
    </Button>
    
  </Actions>
</Dialog>

<script lang="ts">
    import Textfield from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import Button, { Label } from '@smui/button';
    import { openNewTodoDialog, closeDialog } from "./store";
import { loop_guard } from 'svelte/internal';

    let open = false;
    let content = "";
    let buttoned = 'Nothing yet.';
    const onAddTodo = (e: KeyboardEvent) => {
        if(e.code == "Enter")
            closeDialog()
    }
    openNewTodoDialog.subscribe( (value: boolean) => {
        open = value
    })
</script>

