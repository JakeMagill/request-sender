<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import Section from '../components/Shared/Section.vue';
import { store } from '../store'

defineProps<{
    isError: Boolean,
    response: String
}>()

</script>

<template>
    <Section :title="'Response'">
        <template v-slot:default="{isDisabled}">
            <div v-show="store.responseStatusCode > 0" class="flex nowrap justify-between p-2">
                <p> {{ store.responseStatusCode }} </p>
            </div>
            <JsonViewer v-show="!isDisabled" v-if="response != ''" :value="response" :copyable="true" :expanded="true" />
        </template>
    </Section>
</template>