<script setup lang="ts">
import { ref } from 'vue';
import EndpointForm  from './components/EndpointForm.vue'
import ResponseSection from './components/Sections/ResponseSection.vue'
import HeaderSection from './components/Sections/HeadersSection.vue'
import QueryParamSection from './components/Sections/QueryParamSection.vue'
import AuthSection from './components/Sections/AuthSection.vue';
import { useRequestStore } from './stores/requestStore';
import { useResponseStore } from './stores/responseStore';

import type { formSubmission } from './types/formSubmission'

const requestStore = useRequestStore();
const responseStore = useResponseStore();

const submissionError = ref(false);
const submissionResponse = ref('');

function sendRequest(request: formSubmission): void{
  console.log(requestStore.requestHeaders)

  fetch(request.endPoint.href, {
    method: request.type, 
    headers: requestStore.requestHeaders,
  })
  .then((result) => {
    responseStore.statusCode = result.status;
    responseStore.statusText = result.statusText;
    return result.json();
  })
  .then((data) => submissionResponse.value = data)
  .catch((error) => {
    responseStore.error = error;
  })
}
</script>

<template>
  <div class="flex flex-column flex-wrap justify-center items-center">
    <div class="flex flex-column w-1/5 h-full pl-6">
    </div>
    <div class="flex flex-wrap  w-4/5 p-6">
      <EndpointForm @submitted="sendRequest"/>
      <AuthSection />
      <HeaderSection />
      <QueryParamSection />
      <ResponseSection :isError="submissionError" :response="submissionResponse" />
    </div>
  </div>
</template>