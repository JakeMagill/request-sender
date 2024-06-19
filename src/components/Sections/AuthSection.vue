<script setup lang="ts">
import BaseSection from './Base/BaseSection.vue';
import BasicAuth from '../Auth/BasicAuth.vue';
import { AuthTypes } from '../../enums/AuthTypes';
import { useRequestStore } from '../../stores/requestStore';
import { HeaderRecord } from '../../types/headerRecord';

const store = useRequestStore();

var authType = defineModel({
    type: String,
    default: AuthTypes.NO_AUTH
});

function addAuthHeader(headerValue: string) {
    console.log('Adding auth header', headerValue);

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
            <div class="w-1/2 p-2">
                <label for="">Type</label>
                <select v-model="authType" name="" id="">
                    <option v-for="(type, index) in AuthTypes" :key="index" :value="type">
                        {{ type }}
                    </option>
                </select>
            </div>
            <div class="w-1/2 p-2 border-l-2 flex justify-center">
                <p v-if="authType === AuthTypes.NO_AUTH">
                    This request will not use any authorization.
                </p>
                <BasicAuth @createHeader="addAuthHeader" v-else-if="authType === AuthTypes.BASIC" />
            </div>
        </div>
    </BaseSection>
</template>