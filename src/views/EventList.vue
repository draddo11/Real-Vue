<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard/>
  </div>
</template>


<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios' // <--- brings in the axios library

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events') // Does a get request
      .then(response => {
        this.events = response.data // For now, logs out the response
      })
      .catch(error => {
      console.log('There was an error:', error.response) // Logs out the error
      })
  }
}
</script>
