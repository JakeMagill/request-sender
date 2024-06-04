<script setup lang="ts">
import BaseSection from './Base/BaseSection.vue';
import { useRequestStore } from '../../stores/requestStore';

const store = useRequestStore();
</script>

<template>
    <BaseSection :title="'Query Parameters'">
            <div class="flex justify-center">
                <button :class="`bg${store.requestColor}`" class="text-white p-2 px-4 rounded-md hover:opacity-85 transition-opacity m-2" @click="store.addQueryParameter">
                    Add Query Param
                </button>
            </div>
    </BaseSection>
</template>