<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import Section from './Section.vue';

const props = defineProps<{
    isError: Boolean,
    response: String
}>()

</script>

<template>
    <Section :title="'Response'">
        <JsonViewer v-if="response != ''" :value="response" :copyable="true" :expanded="true" />
    </Section>
</template>