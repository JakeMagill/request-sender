<script setup lang="ts">
import BaseSection from './Base/BaseSection.vue';
import BasicAuth from '../Auth/BasicAuth.vue';
import { AuthTypes } from '../../enums/AuthTypes';
import { useRequestStore } from '../../stores/requestStore';
import { HeaderRecord } from '../../types/headerRecord';
import { watch } from 'vue';

const store = useRequestStore();

var authType = defineModel({
    type: String,
    default: AuthTypes.BASIC
});

watch(authType, (newValue) => {
    if(newValue === AuthTypes.NO_AUTH) {
        const headerindex = store.headers.findIndex((h: HeaderRecord) => h.key === 'Authorization');
        if(headerindex > -1) {
            store.removeHeader(headerindex)
        }
    }

    if(newValue === AuthTypes.BASIC) {
        const headerindex = store.headers.findIndex((h: HeaderRecord) => h.key === 'Authorization');
        if(headerindex === -1) {
            store.addHeader({
                key: 'Authorization',
                value: '',
                enabled: true
            } as HeaderRecord )
        }
    }
});

function addAuthHeader(headerValue: string) {
    let authHeader: HeaderRecord = {} as HeaderRecord;

    if(authType.value === AuthTypes.BASIC) {
        authHeader =  {
            key: 'Authorization',
            value: headerValue,
            enabled: true,
        }
    }

    store.updateHeader(authHeader);
}

</script>

<template>
    <BaseSection :title="'Authentication'">
        <div class="flex flex-row justify-center w-full border rounded-md p-2">
            <div class="w-1/2 p-2 flex justify-between items-start">
                <span class="pt-2">Type</span>
                <select v-model="authType" class="p-2 border-2 rounded-md">
                    <option v-for="(type, index) in AuthTypes" :key="index" :value="type">
                        {{ type }}
                    </option>
                </select>
            </div>
            <div class="w-1/2 p-2 border-l-2 flex justify-center">
                <p v-show="authType === AuthTypes.NO_AUTH">
                    This request will not use any authorization.
                </p>
                <BasicAuth v-show="authType === AuthTypes.BASIC" @createHeader="addAuthHeader" />
            </div>
        </div>
    </BaseSection>
</template>