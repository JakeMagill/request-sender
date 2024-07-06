<script setup lang="ts">
import EndpointForm  from './sections/EndpointForm.vue'
import HeaderSection from './sections/HeadersSection.vue'
import AuthSection from './sections/AuthSection.vue';
import QueryParamSection from './sections/QueryParamSection.vue'
import { useRequestStore } from '../../../stores/requestStore';
import type { formSubmission } from '../../../types/formSubmission'
import { useResponseStore } from '../../../stores/responseStore';
import { ref } from 'vue';
import ColumnLarge from '../../structure/columns/ColumnLarge.vue';
import SectionButton from '../../structure/buttons/SectionButton.vue';
import { RequestSections } from '../../../enums/RequestSections';

const store = useRequestStore();
const responseStore = useResponseStore();
const activeSection = ref<RequestSections>(RequestSections.PARAMETERS);

function SetSection(sectionToShow: any): void {
    if (activeSection.value === sectionToShow) {
        return;
    }

    activeSection.value = sectionToShow;
}

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
    <ColumnLarge>
        <EndpointForm @submitted="sendRequest"/>
        <div class="w-full flex justify-between">
            <SectionButton :bound-section="RequestSections.PARAMETERS" :active-section="activeSection" @SET_ACTIVE_SECTION="SetSection" text="Parameters" />
            <SectionButton :bound-section="RequestSections.REQUEST_BODY" :active-section="activeSection" @SET_ACTIVE_SECTION="SetSection" text="Request Body" />
        </div>
        <div class="w-full" v-show="activeSection === RequestSections.PARAMETERS">
            <AuthSection />
            <HeaderSection />
            <QueryParamSection />
        </div>
    </ColumnLarge>
</template>