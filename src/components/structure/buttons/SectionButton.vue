<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { RequestSections } from '../../../enums/RequestSections';

const props = defineProps<{
    boundSection: RequestSections
    activeSection: RequestSections
    text: String,
}>()

const emits = defineEmits(['SET_ACTIVE_SECTION'])

function SetActiveSection() {
    emits('SET_ACTIVE_SECTION', props.boundSection)
}

const buttonClasses = computed(() => {
    return props.boundSection === props.activeSection
    ? 'bg-mint-700 hover:bg-mint-500' 
    : 'bg-midnight-600 hover:bg-midnight-500'
})
</script>

<template>
    <button :class="buttonClasses" class="max-h-12 rounded-full border border-mint-700 p-2 text-white transition-all duration-300" @click="SetActiveSection">{{ text }}</button>
</template>