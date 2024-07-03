<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    title: String
}>()

const isDisabled = ref(false)

function toggleSection() {
    isDisabled.value = !isDisabled.value
}

function enableSection() {
    isDisabled.value = true
}

</script>

<template>
    <div class="w-full border border-gray-700 rounded-md mb-3 p-2">
        <div class="flex nowrap justify-between">
            <p class="text-gray-500 p-2">{{ title }}</p>
            <a v-show="!isDisabled" class="cursor-pointer p-2 text-gray-500 hover:text-mint-700" @click="toggleSection">Hide</a>
            <a v-show="isDisabled" class="cursor-pointer p-2 text-gray-500 hover:text-mint-700" @click="toggleSection">Show</a>
        </div>
        <div v-show="!isDisabled">
            <slot :enableSection="enableSection"></slot>
        </div>
    </div>
</template>