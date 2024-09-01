<script setup lang="ts">
import { nextTick, ref } from 'vue';
import Button from '../../structure/buttons/Button.vue';

const JsonText = ref<string>();

const formatJson = () => {
    try {
        if (JsonText.value) {
            JsonText.value = JSON.stringify(JSON.parse(JsonText.value), null, 4);
        }
    } catch (error) {
        console.error(error)
    }
}

const manipulateInput = (event: any) => {
    if(event.key === 'Tab' || event.keycode === 9) {
        handleTab(event);
    }
    else if(event.key === 'Enter' || event.keycode === 13) {
        handleEnter(event);
    }
    else if(event.key === '{') {
        handleCurlyBracketOpen(event);
    }
}

const handleCurlyBracketOpen = (event:any) => {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;

    const precedingCharacter = (JsonText.value ?? '').substring(end).slice(-1);

    if (precedingCharacter === '}') {
        return;
    }

    JsonText.value = (JsonText.value ?? '').substring(0, start) + '}' + (JsonText.value ?? '').substring(end);
    setCaretPosition(event, start)
}

const handleEnter = (event: any) => {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;

    const precedingCharacter = (JsonText.value ?? '').substring(0, start).slice(-1);
    const nextCharacter = (JsonText.value ?? '').substring(end).slice(-1);

    if (precedingCharacter === '{' && nextCharacter !== '}') {
        event.preventDefault();
        JsonText.value = (JsonText.value ?? '').substring(0, start) + '\n    \n' + (JsonText.value ?? '').substring(end);
        
        setCaretPosition(event, start + 5);
    }


}

const handleTab = (event: any) => {
    event.preventDefault();
        const start = event.target.selectionStart;
        const end = event.target.selectionEnd;
        JsonText.value = (JsonText.value ?? '').substring(0, start) + '    ' + (JsonText.value ?? '').substring(end);

        setCaretPosition(event, start + 4);
}

const setCaretPosition = (event:any, pos: number) => {
    nextTick(() => {
        event.target.selectionStart = pos;
        event.target.selectionEnd = pos;
    });
}

</script>

<template>
    <textarea 
        v-model="JsonText" 
        @keydown="manipulateInput"
        class="w-full flex-1 mt-2 font-mono rounded-md text-sm text-white bg-midnight-600 border-2 border-gray-500 resize-none focus:border-mint-700" rows="34">
    </textarea>
    <div class=" mt-2">
        <Button @click="formatJson">Format</Button>
    </div>
</template>