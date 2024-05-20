<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '../store'

export default defineComponent({
    name: 'Section',
    props: {
        title: String,
    },
    data() {
        return {
            store,
            isDisabled: false
        }
    },
    methods: {
        toggleSection() {
            this.isDisabled = !this.isDisabled
        }
    }
})
</script>

<template>
    <div class="w-full border rounded-md mt-6 p-2">
        <div class="flex nowrap justify-between">
            <p class="text-gray-400 p-2">Headers</p>
            <a v-show="!isDisabled" :class="`text${store.requestColor}`" class="cursor-pointer p-2" @click="toggleSection">Hide</a>
            <a v-show="isDisabled" :class="`text${store.requestColor}`" class="cursor-pointer p-2" @click="toggleSection">Show</a>
        </div>
        <slot :isDisabled="isDisabled"></slot>
    </div>
</template>