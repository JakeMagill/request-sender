<script setup lang="ts">
import ParameterEditor from './components/areas/requestEditor/ParameterEditor.vue';
import ResponseSection from './components/areas/responseViewer/ResponseSection.vue'
import Column from './components/layout/Column.vue';
</script>

<template>
  <div class="flex flex-row justify-center p-3 border-b-2 border-mint-700 bg-midnight-700 text-mint-700">
    <h2>Request Sender</h2>
  </div>
  <div class="bg-slate-900 flex flex-column flex-nowrap justify-start h-screen items-start">
    <Column>
      <p class="text-gray-500">Request</p>
    </Column>
    <ParameterEditor /> 
    <ResponseSection :response="submissionResponse" :statusCode="statusCode" :statusText="statusText"/>
  </div>
</template>