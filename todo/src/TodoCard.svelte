<script lang="ts">
    import Card, {
        PrimaryAction,
        Content,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import IconButton from "@smui/icon-button";
    import { Icon } from "@smui/common";
    import type { iTodo } from "./interface";
    import moment from 'moment';
    export let Info: iTodo | undefined = undefined;
</script>

<main>
    <div class="card-display">
        <div class="card-container">
            <Card>
                <Actions>
                    <div style="text-align: left;">
                             <h2
                                class="mdc-typography--headline6"
                                style="margin: 0;"
                            >
                                {#if Info && Info.name}
                                    {Info.name}
                                {/if}
                            </h2>
                            
                        </div>
                    <ActionIcons>
                        <IconButton
                            toggle
                            aria-label="Add to favorites"
                            title="Add to favorites"
                        >
                            <Icon class="material-icons" on>favorite</Icon>
                            <Icon class="material-icons">favorite_border</Icon>
                        </IconButton>
                        <IconButton
                            toggle
                            aria-label="Add to favorites"
                            title="Add to favorites"
                        >
                            <Icon class="material-icons" on>bookmark</Icon>
                            <Icon class="material-icons">bookmark_border</Icon>
                        </IconButton>

                        <IconButton class="material-icons" title="Share"
                            >share</IconButton
                        >
                    </ActionIcons>
                </Actions>
                <div class="flexor" >
                    {#if Info && Info.desc}
                        {moment(Info.date).format('YYYY-MM-DD HH:mm:ss')}
                    {/if}
                </div>
                <PrimaryAction>
                    <Content class="mdc-typography--body2">
                        <div class="flexor">
                            {#if Info && Info.desc}
                                {Info.desc}
                            {/if}
                        </div>
                    </Content>
                </PrimaryAction>
               
            </Card>
        </div>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 100%;
    }
    .flexor {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
    }
</style>
