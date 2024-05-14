<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeadersSection',
    emits: ['UPDATE_HEADER'],
    props: {
        id: Number
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
    <div class="flex no-wrap m-2 border rounded-md">
        <input class="w-1/3 m-2" type="text" placeholder="key" v-model="headerKey" />
        <input class="w-1/3 m-2" type="text" placeholder="value" v-model="headerValue" />
        <input class="m-2" type="checkbox" v-model="enabled">
    </div>
</template>