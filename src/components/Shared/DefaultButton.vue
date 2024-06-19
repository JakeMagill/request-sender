<script setup lang="ts">
import { useRequestStore } from '../../stores/requestStore'

const store = useRequestStore()
</script>

<template>
 <button :class="`bg${store.requestColor}`" class="p-2 px-4 mx-2 rounded-md text-white hover:opacity-85 transition-opacity">
    <slot></slot>
 </button>
</template>