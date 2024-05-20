<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'
import HeaderRow from './HeaderRow.vue'
import Section from './Section.vue'

import type { HeaderRecord } from '../types/headerRecord'

const headers = ref([] as HeaderRecord[]);

function addHeader() {
    headers.value.push({
        key: '',
        value: '',
        enabled: true
    } as HeaderRecord)
}

</script>

<template>
    <Section :title="'Headers'">
        <template v-slot:default="{isDisabled}">
            <div v-show="!isDisabled">
                <HeaderRow v-for="(item, index) in headers" :id="index" />
                <div class="flex justify-center">
                    <button :class="`bg${store.requestColor}`" class="text-white p-2 px-4 rounded-md hover:opacity-85 transition-opacity m-2" @click="addHeader">Add Header</button>
                </div>
            </div>
        </template>
    </Section>
</template>