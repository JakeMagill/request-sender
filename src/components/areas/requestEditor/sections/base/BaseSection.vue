<script setup lang="ts">
import { ref } from 'vue'
import { useRequestStore } from '../../../../../stores/requestStore'

defineProps<{
    title: String
}>()

const store = useRequestStore()
const isDisabled = ref(false)

function toggleSection() {
    isDisabled.value = !isDisabled.value
}

function enableSection() {
    isDisabled.value = true
}

</script>

<template>
    <div class="w-full border border-gray-200 rounded-md mb-6 p-2">
        <div class="flex nowrap justify-between">
            <p class="text-gray-400 p-2">{{ title }}</p>
            <a v-show="!isDisabled" :class="`text${store.requestColor}`" class="cursor-pointer p-2" @click="toggleSection">Hide</a>
            <a v-show="isDisabled" :class="`text${store.requestColor}`" class="cursor-pointer p-2" @click="toggleSection">Show</a>
        </div>
        <div v-show="!isDisabled">
            <slot :enableSection="enableSection"></slot>
        </div>
    </div>
</template>