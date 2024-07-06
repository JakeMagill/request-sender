<script setup lang="ts">
import HeaderRow from '../headers/HeaderRow.vue'
import BaseSection from './base/BaseSection.vue'
import { useRequestStore } from '../../../../stores/requestStore'
import type { HeaderRecord } from '../../../../types/headerRecord'
import Button from '../../../structure/buttons/Button.vue'

const store = useRequestStore();

function addHeader() {
    store.addHeader({
        key: '',
        value: '',
        enabled: true
    } as HeaderRecord )
}
</script>

<template>
    <BaseSection :title="'Headers'">
        <HeaderRow v-for="item in store.headers" :key="item.id" :header="item"  @UPDATE_HEADER="store.updateHeader"/>
        <div class="flex justify-center my-2">
            <Button @click="addHeader">Add Header</Button>
        </div>
    </BaseSection>
</template>