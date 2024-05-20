<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const props = defineProps<{
    id: Number
}>()

const id = props.id;
const headerKey = ref('');
const headerValue = ref('');
const enabled = ref(true);

const emit = defineEmits(['UPDATE_HEADER'])

function updateHeader() {
    emit('UPDATE_HEADER', {
        id: id,
        key: headerKey.value,
        value: headerValue.value,
        enabled: enabled.value
    })
}
</script>

<template>
    <div class="flex no-wrap m-2">
        <input class="w-1/2 p-2 mr-2 border rounded-md" type="text" placeholder="key" :disabled="!enabled" v-model="headerKey" />
        <input class="w-1/2 p-2 mr-2 border rounded-md" type="text" placeholder="value" :disabled="!enabled" v-model="headerValue" />
        <input type="checkbox" v-model="enabled">
        <hr>
    </div>
</template>