<script lang="ts">
import { defineComponent } from 'vue'
import { setRequestColour } from '../helpers/requestColourHelper'
import { RequestTypes } from '../enums/RequestTypes'
import { formSubmission } from '../types/formSubmission'
import { store } from '../store'


export default defineComponent({
    name: 'EndpointForm',
    emits: ['formSubmitted'],
    prpos: {
        isError: Boolean
    },
    data() {
        return {
            store,
            RequestTypes,
            requestType: '',
            requestColorClass: '',
            requestEndpoint: '',
        }
    },
    beforeMount() {
        this.requestType = RequestTypes.GET
    },
    methods: {
        setEndpontColor() {
            store.requestColor = setRequestColour(this.requestType)
        },
        submitEndpoint() {
            const url = new URL(this.requestEndpoint)
            const submission: formSubmission = {
                type: this.requestType,
                endPoint: url
            }

            this.$emit('formSubmitted', submission)
        }
    }
})
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