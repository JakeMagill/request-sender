<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { store } from '../store'

const props = defineProps<{
    title: String
}>()

const isDisabled = ref(false)

function toggleSection() {
    isDisabled.value = !isDisabled.value
}
</script>

<template>
    <div class="w-full border rounded-md mt-6 p-2">
        <div class="flex nowrap justify-between">
            <p class="text-gray-400 p-2">{{ title }}</p>
            <a v-show="!isDisabled" :class="`text${store.requestColor}`" class="cursor-pointer p-2" @click="toggleSection">Hide</a>
            <a v-show="isDisabled" :class="`text${store.requestColor}`" class="cursor-pointer p-2" @click="toggleSection">Show</a>
        </div>
        <slot :isDisabled="isDisabled"></slot>
    </div>
</template>