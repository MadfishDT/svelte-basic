<script lang="ts">
    import Card, {
        PrimaryAction,
        Content,
        Actions,
        ActionIcons,
    } from "@smui/card";
    import IconButton from "@smui/icon-button";
    import { Icon } from "@smui/common";
    import type { iTodo } from "./interface";
    import { favorite } from './store'
    import moment from 'moment';
    export let info: iTodo | undefined = undefined;

    export let favoriteToggle = info ? info.favorite : false
    export let checkedToggle = info ? info.selected: false
    
</script>

<main>
    <div class="card-display">
        <div class="card-container">
            <Card>
                <div class="flexor" style="margin-left: 10px; margin-top:5px;">
                    <span style="font-size:10px;">
                    {#if info && info.desc}
                        {moment(info.date).format('YYYY-MM-DD HH:mm:ss')}
                    {/if}
                     </span>
                </div>
                <Actions style="padding-top:0px;">
                    <div style="text-align: left;">
                             <h2
                                class="mdc-typography--headline6"
                                style="margin: 0;"
                            >
                                {#if info && info.name}
                                    {info.name}
                                {/if}
                            </h2>
                            
                        </div>
                    <ActionIcons>
                        <IconButton
                            aria-label="Add to favorites"
                            title="Add to favorites"
                            on:click={() => {
                                favoriteToggle = !favoriteToggle;
                                if(favoriteToggle) favorite(info)
                            }}
                        >
                            {#if favoriteToggle}
                                <Icon class="material-icons" >favorite</Icon>
                            {:else}
                                <Icon class="material-icons">favorite_border</Icon>
                            {/if}
                        </IconButton>
                        <IconButton
                            aria-label="Add to favorites"
                            title="Add to favorites"
                            on:click={() => checkedToggle = !checkedToggle}
                            >
                            {#if checkedToggle}
                                <Icon class="material-icons" >check_box</Icon>
                            {:else}
                                <Icon class="material-icons">check_box_outline_blank</Icon>
                            {/if}
                            
                        </IconButton>

                       
                    </ActionIcons>
                </Actions>
                
                <PrimaryAction>
                    <Content class="mdc-typography--body2">
                        <div class="flexor">
                            {#if info && info.desc}
                                {info.desc}
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
