<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeadersSection',
    emits: ['UPDATE_HEADER'],
    props: {
        id: Number,
    },
    data() {
        return {
            id: this.id,
            headerKey: '',
            headerValue: '',
            enabled: true,
        }
    },
    methods: {
        updateHeader() {
            this.$emit('UPDATE_HEADER', {
                id: this.id,
                key: this.headerKey,
                value: this.headerValue,
                enabled: this.enabled
            })
        }
    }
})
</script>

<template>
    <div class="flex no-wrap m-2">
        <input class="w-1/2 p-2 mr-2 border rounded-md" type="text" placeholder="key" :disabled="!enabled" v-model="headerKey" />
        <input class="w-1/2 p-2 mr-2 border rounded-md" type="text" placeholder="value" :disabled="!enabled" v-model="headerValue" />
        <input type="checkbox" v-model="enabled">
        <hr>
    </div>
</template>