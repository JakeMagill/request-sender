<script lang="ts">
import { defineComponent } from 'vue';
import EndpointForm  from './components/EndpointForm.vue'
import ResponseDisplay from './components/ResponseDisplay.vue'
import HeaderSection from './components/HeadersSection.vue'

export default defineComponent({
  components: {
    EndpointForm,
    ResponseDisplay,
    HeaderSection,
  },
  data() {
    return {
      submissionError: false,
      submissionResponse: ''
    }
  },
  methods: {
    sendRequest(request: formSubmission){
      fetch(request.endPoint.href, {
        method: request.type
      })
      .then((result) => result.json())
      .then((data) => this.submissionResponse = data)
      .catch((error) => {
        this.submissionError = true
        this.submissionResponse = error
      })
    }
  }
})
</script>

<template>
  <div class="flex flex-column flex-wrap justify-center items-center">
    <div class="flex flex-column w-1/5 h-full pl-6">
      <HistoryBar />
    </div>
    <div class="flex flex-wrap  w-4/5 p-6">
      <EndpointForm :is-Error="submissionError" @formSubmitted="sendRequest"/>
      <HeaderSection />
      <ResponseDisplay :isError="submissionError" :response="submissionResponse"/>
    </div>
  </div>
</template>