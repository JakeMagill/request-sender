<script setup lang="ts">
import { ref } from 'vue'
import HeaderRow from './HeaderRow.vue'
import Section from '../Shared/Section.vue'
import { useRequestStore } from '../../stores/requestStore'

import type { HeaderRecord } from '../../types/headerRecord'

const count = ref(0);
const store = useRequestStore();

function addHeader() {
    store.addHeader({
        id: count.value,
        key: '',
        value: '',
        enabled: true
    } as HeaderRecord)

    count.value++
}
</script>

<template>
    <Section :title="'Headers'">
        <template v-slot:default="{isDisabled}">
            <div v-show="!isDisabled">
                <HeaderRow v-for="item in store.headers" :header="item" @UPDATE_HEADER="store.updateHeader"/>
                <div class="flex justify-center">
                    <button :class="`bg${store.requestColor}`" class="text-white p-2 px-4 rounded-md hover:opacity-85 transition-opacity m-2" @click="addHeader">Add Header</button>
                </div>
            </div>
        </template>
    </Section>
</template>