<script setup lang="ts">
import { computed } from 'vue';
import { useResponseStore } from '../../../stores/responseStore';
import ColumnSmall from '../../structure/columns/ColumnSmall.vue';
import AreaTitle from '../../structure/AreaTitle.vue';
import JsonViewer from 'vue-json-viewer'

const store = useResponseStore();

const statusCode = store.responseStatus;

const response = computed(() => {
    return store.responseBody
});

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
    <ColumnSmall>
        <AreaTitle class="mb-2">Response</AreaTitle>
        <div v-show="Number(statusCode) > 0" class="flex nowrap justify-between p-2">
            <p> {{ statusCode }} {{ statusText }} </p>
        </div>
        <div :class="responseBorderColor" class="w-full flex flex-col h-[calc(100vh-150px)] border-2 rounded-md overflow-scroll">
            <json-viewer :value="response" theme="jsonViewer" copyable v-if="response != ''" />
        </div>
    </ColumnSmall>
</template>