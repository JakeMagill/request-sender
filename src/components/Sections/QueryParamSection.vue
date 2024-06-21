<script setup lang="ts">
import BaseSection from './Base/BaseSection.vue';
import DefaultButton from '../Shared/DefaultButton.vue';

</script>

<template>
    <BaseSection :title="'Query Parameters'">
            <div class="flex justify-center">
                <DefaultButton @click="">Add Query Param</DefaultButton>
            </div>
    </BaseSection>
</template>