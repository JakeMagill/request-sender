<script setup lang="ts">
import BaseSection from './Base/BaseSection.vue';
</script>

<template>
    <BaseSection :title="'Authentication'">
        <template v-slot:default="{isDisabled}">
            <div v-show="!isDisabled" class="flex justify-center">
                Test
            </div>
        </template>
    </BaseSection>
</template>