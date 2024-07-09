<script setup lang="ts">
import { ref } from 'vue'
import AreaTitle from '../../../../structure/AreaTitle.vue';

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
    <div class="w-full border-gray-700 border-2 rounded-md mt-3">
        <div class="flex nowrap p-2 justify-between align-middle">
            <AreaTitle>{{ title }}</AreaTitle>
            <a v-show="!isDisabled" class="cursor-pointer text-gray-500 hover:text-mint-700" @click="toggleSection">Hide</a>
            <a v-show="isDisabled" class="cursor-pointer text-gray-500 hover:text-mint-700" @click="toggleSection">Show</a>
        </div>
        <div v-show="!isDisabled">
            <slot :enableSection="enableSection"></slot>
        </div>
    </div>
</template>