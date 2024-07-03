<script setup lang="ts">
import { ref } from 'vue'
import EndpointForm  from './sections/EndpointForm.vue'
import HeaderSection from './sections/HeadersSection.vue'
import AuthSection from './sections/AuthSection.vue';
import QueryParamSection from './sections/QueryParamSection.vue'
import Column from '../../layout/Column.vue'
import { useRequestStore } from '../../../stores/requestStore';
import type { formSubmission } from '../../../types/formSubmission'

const store = useRequestStore();

const submissionResponse = ref('');
const statusCode = ref(0);
const statusText = ref('');

function sendRequest(request: formSubmission): void{
    fetch(request.endPoint.href, {
        method: request.type, 
        headers: store.enabledRequestHeaders,
    })
    .then((result) => {
        statusCode.value = result.status;
        statusText.value = result.statusText;
        return result.json();
    })
    .then((data) => submissionResponse.value = data)
    .catch(() => submissionResponse.value = '');
}
</script>

<template>
    <Column>
        <EndpointForm @submitted="sendRequest"/>
        <AuthSection />
        <HeaderSection />
        <QueryParamSection />
    </Column>
</template>