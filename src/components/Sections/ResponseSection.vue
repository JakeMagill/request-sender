<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import BaseSection from './Base/BaseSection.vue';
import { useResponseStore } from '../../stores/responseStore';

const store = useResponseStore()

defineProps<{
    isError: Boolean,
    response: String
}>()

</script>

<template>
    <BaseSection :title="'Response'">
            <div v-show="store.statusCode > 0" class="flex nowrap justify-between p-2">
                <p> {{ store.statusText }} </p>
                <p> {{ store.statusCode }} </p>
            </div>
            <JsonViewer v-show="store.responseJson != ''" v-if="response != ''" :value="response" :copyable="true" :expanded="true" />
    </BaseSection>
</template>