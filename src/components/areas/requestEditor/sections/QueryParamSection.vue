<script setup lang="ts">
import BaseSection from './base/BaseSection.vue';
import DefaultButton from '../../../shared/DefaultButton.vue';

</script>

<template>
    <BaseSection :title="'Query Parameters'">
            <div class="flex justify-center">
                <DefaultButton @click="">Add Query Param</DefaultButton>
            </div>
    </BaseSection>
</template>