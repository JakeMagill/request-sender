<script setup lang="ts">
import { ref } from 'vue'
import { RequestTypes } from '../../../../enums/RequestTypes'
import type { formSubmission } from '../../../../types/formSubmission'

const emits = defineEmits(['submitted']);

const requestType = ref(RequestTypes.GET);
const requestEndpoint = ref('');

function submitEndpoint() {
    const url = new URL(requestEndpoint.value)
    const submission: formSubmission = {
        type: requestType.value,
        endPoint: url
    }

    emits('submitted', submission)
}
</script>

<template>
    <div class="flex flex-nowrap text-center border-2 border-gray-700 rounded-md mb-3 p-2 w-full">
        <select class="font-bold border-none bg-midnight-600 text-mint-700" v-model="requestType">
            <option v-for="(type, index) in RequestTypes" :key="index" :value="type">
                {{ type }}
            </option>
        </select>
    <input v-model="requestEndpoint" class="w-full mx-2 rounded-md border-2 text-white bg-midnight-600 p-1" type="text" placeholder="https://">
    <button class="p-2 px-4 rounded-md text-white bg-mint-700 hover:bg-mint-500 transition-all" @click="submitEndpoint">Send</button>
  </div>
</template>