<script setup lang="ts">
import { ref } from 'vue'
import { HeaderRecord } from '../../types/headerRecord';

const props = defineProps<{
    header: HeaderRecord
}>()

const emits = defineEmits(['UPDATE_HEADER'])

const headerId = ref(props.header.id);
const headerKey = ref(props.header.key);
const headerValue = ref(props.header.value);
const enabled = ref(props.header.enabled);

function updateHeader() {
    emits('UPDATE_HEADER', {
        id: headerId.value,
        key: headerKey.value,
        value: headerValue.value,
        enabled: enabled.value
    } as HeaderRecord)
}

</script>

<template>
    <div class="flex no-wrap m-2">
        <!--Make text fields a component-->
        <input class="w-1/2 p-2 mr-2 border-2 rounded-md text-gray-500 bg-midnight-600 border-gray-500" @blur="updateHeader" type="text" placeholder="key" :disabled="!enabled" v-model="headerKey" />
        <input class="w-1/2 p-2 mr-2 border-2 rounded-md text-gray-500 bg-midnight-600 border-gray-500" @blur="updateHeader" type="text" placeholder="value" :disabled="!enabled" v-model="headerValue" />
        <input type="checkbox" @change="updateHeader" v-model="enabled">
        <hr>
    </div>
</template>