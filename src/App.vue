<script setup lang="ts">
import { ref } from 'vue';
import EndpointForm  from './components/EndpointForm.vue'
import ResponseSection from './components/Sections/ResponseSection.vue'
import HeaderSection from './components/Sections/HeadersSection.vue'
import QueryParamSection from './components/Sections/QueryParamSection.vue'
import AuthSection from './components/Sections/AuthSection.vue';
import { useRequestStore } from './stores/requestStore';

import type { formSubmission } from './types/formSubmission'

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
  <div class="flex flex-column flex-wrap justify-center items-center">
    <div class="flex flex-column w-1/3 h-full pl-6">
    </div>
    <div class="flex flex-wrap  w-2/3 p-6">
      <EndpointForm @submitted="sendRequest"/>
      <AuthSection />
      <HeaderSection />
      <QueryParamSection />
      <ResponseSection :response="submissionResponse" :statusCode="statusCode" :statusText="statusText"/>
    </div>
  </div>
</template>