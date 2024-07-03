<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import { computed } from 'vue';
import Column from '../../layout/Column.vue';
import { useResponseStore } from '../../../stores/responseStore';

const store = useResponseStore();

const statusCode = store.responseStatus;
const response = store.responseBody;
const statusText = store.responseStatusText;

const responseBorderColor = computed(() => {
    if (Number(statusCode) >= 200 && Number(statusCode) < 300) {
        return 'border-green-500'
    } else if (Number(statusCode) >= 300 && Number(statusCode) < 400) {
        return 'border-yellow-500'
    } else if (Number(statusCode) >= 400 && Number(statusCode) < 500) {
        return 'border-red-500'
    } else {
        return 'border-gray-500'
    }
})

</script>

<template>
    <Column>
        <div class="flex nowrap justify-between">
            <p class="text-gray-500">Response</p>
        </div>
        <div v-show="Number(statusCode) > 0" class="flex nowrap justify-between p-2">
            <p> {{ statusCode }} {{ statusText }} </p>
        </div>
        <div :class="responseBorderColor" class="w-full border-2 rounded-md p-2" v-if="response != ''">
            <JsonViewer :value="response" :copyable="true" :expanded="true" />
        </div>
    </Column>
</template>