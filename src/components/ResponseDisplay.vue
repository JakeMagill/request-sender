<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'

const props = defineProps<{
    isError: Boolean,
    response: String
}>()

</script>

<template>
    <div class="w-full border rounded-md mt-6 p-2">
        <p class="text-gray-400">Response</p>
        <div v-if="isError" class="text-red-500">{{ response }}</div>
       <JsonViewer v-if="response != ''" :value="response" :copyable="true" :expanded="true" />
    </div>
</template>