<template>
<div>
  <h1>Create Event, {{user.name}}</h1>
  <p>This event is created by {{ user.name }}</p>
  <!-- <h1>Create Event, {{this.$store.categories}}</h1> -->
  <!-- <p>{{ getEventById(2) }}</p> -->
  <!-- <button @click="incrementCount">Increment</button> -->
  <!-- <input type="number" v-model.number="incrementBy"> -->
  <!-- <p>{{ getEvent(1) }}</p> -->
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories']),
    getEvent() {
      return this.$store.getters.getEventById
    }
  },
  method: {
    incrementCount() {
      this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    }
  }
}
</script>
