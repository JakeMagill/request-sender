<script setup lang="ts">
import { ref } from 'vue';
import ParameterEditor from './components/areas/requestEditor/ParameterEditor.vue';
import ResponseSection from './components/areas/responseViewer/ResponseSection.vue'
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
  <div class="flex flex-row justify-center p-3 border-b-4">
    <h2>Request Sender</h2>
  </div>
  <div class="flex flex-column flex-wrap justify-start h-screen items-start">
    <div class="flex flex-column w-1/3 pl-3">
    </div>
    <ParameterEditor /> 
    <div class="flex flex-wrap w-1/3 p-3">
      <ResponseSection :response="submissionResponse" :statusCode="statusCode" :statusText="statusText"/>
    </div>
  </div>
</template>