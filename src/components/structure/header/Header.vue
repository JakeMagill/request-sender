<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    title: string
}>()

</script>

<template>
    <div class="flex flex-row justify-center p-3 border-b-2 border-mint-700 bg-midnight-700 text-mint-700">
        <h2>{{title}}</h2>
    </div>
</template>