<script setup lang="ts">
import EndpointForm  from './sections/EndpointForm.vue'
import HeaderSection from './sections/HeadersSection.vue'
import AuthSection from './sections/AuthSection.vue';
import QueryParamSection from './sections/QueryParamSection.vue'
import Column from '../../layout/Column.vue'
import { useRequestStore } from '../../../stores/requestStore';
import type { formSubmission } from '../../../types/formSubmission'
import { useResponseStore } from '../../../stores/responseStore';

const store = useRequestStore();
const responseStore = useResponseStore();



function sendRequest(request: formSubmission): void{
    fetch(request.endPoint.href, {
        method: request.type, 
        headers: store.enabledRequestHeaders,
    })
    .then((result) => {
        responseStore.responseStatus = result.status;
        responseStore.responseStatusText = result.statusText;
        return result.json();
    })
    .then((data) => responseStore.responseBody = data)
    .catch(() => responseStore.responseBody = '');
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