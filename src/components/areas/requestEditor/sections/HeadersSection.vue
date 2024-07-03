<script setup lang="ts">
import HeaderRow from '../headers/HeaderRow.vue'
import BaseSection from './base/BaseSection.vue'
import { useRequestStore } from '../../../../stores/requestStore'
import DefaultButton from '../../../shared/DefaultButton.vue'

import type { HeaderRecord } from '../../../../types/headerRecord'

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
            <div>
                <HeaderRow v-for="item in store.headers" :key="item.id" :header="item"  @UPDATE_HEADER="store.updateHeader"/>
                <div class="flex justify-center mt-2">
                    <DefaultButton @click="addHeader">Add Header</DefaultButton>
                </div>
            </div>
    </BaseSection>
</template>