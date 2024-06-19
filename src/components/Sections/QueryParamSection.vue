<script setup lang="ts">
import BaseSection from './Base/BaseSection.vue';
import { useRequestStore } from '../../stores/requestStore';
import DefaultButton from '../Shared/DefaultButton.vue';

const store = useRequestStore();
</script>

<template>
    <BaseSection :title="'Query Parameters'">
            <div class="flex justify-center">
                <DefaultButton @click="store.addQueryParameter">Add Query Param</DefaultButton>
            </div>
    </BaseSection>
</template>