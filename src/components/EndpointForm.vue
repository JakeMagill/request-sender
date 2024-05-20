<script setup lang="ts">
import { ref, defineEmits, onBeforeMount } from 'vue'
import { store } from '../store'
import { RequestTypes } from '../enums/RequestTypes'
import { setRequestColour } from '../helpers/requestColourHelper'
import type { formSubmission } from '../types/formSubmission'
 
const emits = defineEmits(['FORM_SUBMITTED'])

const requestType = ref('');
const requestEndpoint = ref('');

onBeforeMount(() => {
    requestType.value = RequestTypes.GET
})

function setEndpontColor() {
    store.requestColor = setRequestColour(requestType.value)
}

function submitEndpoint() {
    const url = new URL(requestEndpoint.value)
    const submission: formSubmission = {
        type: requestType.value,
        endPoint: url
    }

    emits('FORM_SUBMITTED', submission)
}
</script>

<template>
    <div :class="`border${store.requestColor}`" class="flex flex-nowrap text-center border-2 rounded-md p-2 w-full">
        <select :class="`text${store.requestColor}`" class="font-bold" v-model="requestType" @change="setEndpontColor()">
            <option :value="RequestTypes.GET">GET</option>
            <option :value="RequestTypes.POST">POST</option>
            <option :value="RequestTypes.PUT">PUT</option>
            <option :value="RequestTypes.PATCH">PATCH</option>
            <option :value="RequestTypes.DELETE">DELETE</option>
      </select>
    <input v-model="requestEndpoint" class="w-full mx-2" type="text" placeholder="https://">
    <button :class="`bg${store.requestColor}`" class="p-2 px-4 mx-2 rounded-md text-white hover:opacity-85 transition-opacity" @click="submitEndpoint()">Send</button>
  </div>
</template>