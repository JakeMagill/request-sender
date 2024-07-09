<script setup lang="ts">
import Button from '../../../structure/buttons/Button.vue'
import BaseSection from './base/BaseSection.vue';


</script>

<template>
    <BaseSection :title="'Query Parameters'">
        <div class="flex my-2 justify-center">
            <Button @click="">Add Query Param</Button>
        </div>
    </BaseSection>
</template>