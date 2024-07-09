<script setup lang="ts">
import ParameterEditor from './components/areas/requestEditor/ParameterEditor.vue';
import ResponseSection from './components/areas/responseViewer/ResponseSection.vue'
import Header from './components/structure/header/Header.vue'
</script>

<template>
  <Header title="Request Sender"></Header>
  <div class="bg-slate-900 flex flex-column flex-nowrap justify-start h-screen items-start">
    <ParameterEditor /> 
    <ResponseSection />
  </div>
</template>