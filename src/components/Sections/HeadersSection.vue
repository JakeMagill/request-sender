<script setup lang="ts">
import { ref } from 'vue'
import HeaderRow from '../Headers/HeaderRow.vue'
import BaseSection from './Base/BaseSection.vue'
import { useRequestStore } from '../../stores/requestStore'

import type { HeaderRecord } from '../../types/headerRecord'

const store = useRequestStore();
const count = ref(store.headers.length + 1);

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
    <BaseSection :title="'Headers'">
            <div>
                <HeaderRow v-for="item in store.headers" :header="item" @UPDATE_HEADER="store.updateHeader"/>
                <div class="flex justify-center">
                    <button :class="`bg${store.requestColor}`" class="text-white p-2 px-4 rounded-md hover:opacity-85 transition-opacity m-2" @click="addHeader">Add Header</button>
                </div>
            </div>
    </BaseSection>
</template>