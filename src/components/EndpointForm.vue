<script lang="ts">
import { defineComponent } from 'vue'
import { RequestTypes } from '../enums/RequestTypes';
import { RequestColors } from '../enums/Colors';

export default defineComponent({
    name: 'EndpointForm',
    emits: ['formSubmitted'],
    prpos: {
        isError: Boolean
    },
    data() {
        return {
            RequestTypes,
            RequestColors,
            requestType: RequestTypes.GET, 
            requestColorClass: RequestColors.GET,
            requestEndpoint: '',
        }
    },
    methods: {
        setEndpontColor() {
            switch(this.requestType) {
                case RequestTypes.GET:
                    this.requestColorClass = RequestColors.GET
                    break
                case RequestTypes.POST:
                    this.requestColorClass = RequestColors.POST
                    break
                case RequestTypes.PUT:
                    this.requestColorClass = RequestColors.PUT
                    break
                case RequestTypes.PATCH:
                    this.requestColorClass = RequestColors.PATCH
                    break
                case RequestTypes.DELETE:
                    this.requestColorClass = RequestColors.DELETE
                    break
            }
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
    <div :class="`border${requestColorClass}`" class="flex flex-nowrap text-center border-2 rounded-md p-2 w-full">
        <select :class="`text${requestColorClass}`" class="font-bold" v-model="requestType" @change="setEndpontColor()">
            <option :value="RequestTypes.GET">GET</option>
            <option :value="RequestTypes.POST">POST</option>
            <option :value="RequestTypes.PUT">PUT</option>
            <option :value="RequestTypes.PATCH">PATCH</option>
            <option :value="RequestTypes.DELETE">DELETE</option>
      </select>
    <input v-model="requestEndpoint" class="w-full mx-2" type="text" placeholder="https://">
    <button :class="`bg${requestColorClass}`" class="p-2 px-4 mx-2 rounded-md text-white hover:opacity-85 transition-opacity" @click="submitEndpoint()">Send</button>
  </div>
</template>