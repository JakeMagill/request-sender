<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import { computed } from 'vue';
import Column from '../../layout/Column.vue';

const props = defineProps<{
    response: String,
    statusCode: Number,
    statusText: String
}>()

const responseBorderColor = computed(() => {
    if (Number(props.statusCode) >= 200 && Number(props.statusCode) < 300) {
        return 'border-green-500'
    } else if (Number(props.statusCode) >= 300 && Number(props.statusCode) < 400) {
        return 'border-yellow-500'
    } else if (Number(props.statusCode) >= 400 && Number(props.statusCode) < 500) {
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