<script setup lang="ts">
import { ref } from 'vue';
import { store } from './store';
import EndpointForm  from './components/EndpointForm.vue'
import ResponseSection from './components/ResponseSection.vue'
import HeaderSection from './components/Headers/HeadersSection.vue'
import type { formSubmission } from './types/formSubmission'

const submissionError = ref(false);
const submissionResponse = ref('');

function sendRequest(request: formSubmission){
  const headers = store.headers.map((header) => {
        return {
            key: header.key,
            value: header.value
        }
    });

  fetch(request.endPoint.href, {
    method: request.type, 
    headers: headers.map(header => [header.key, header.value]),
  })
  .then((result) => {
    store.responseStatusCode = result.status;
    return result.json();
  })
  .then((data) => submissionResponse.value = data)
  .catch((error) => {
    store.responseError = error;
  })
}
</script>

<template>
  <div class="flex flex-column flex-wrap justify-center items-center">
    <div class="flex flex-column w-1/5 h-full pl-6">
    </div>
    <div class="flex flex-wrap  w-4/5 p-6">
      <EndpointForm :is-Error="submissionError" @formSubmitted="sendRequest"/>
      <HeaderSection />
      <ResponseSection :isError="submissionError" :response="submissionResponse"/>
    </div>
  </div>
</template>