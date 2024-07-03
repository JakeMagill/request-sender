<script setup lang="ts">
import DefaultButton from '../../../shared/DefaultButton.vue';
import BaseSection from './base/BaseSection.vue';


</script>

<template>
    <BaseSection :title="'Query Parameters'">
            <div class="flex justify-center">
                <DefaultButton @click="">Add Query Param</DefaultButton>
            </div>
    </BaseSection>
</template>