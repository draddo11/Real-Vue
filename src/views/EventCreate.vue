<template>
<div>
  <h1>Create Event, {{user.name}}</h1>
  <p>This event is created by {{ user.name }}</p>
  <!-- <h1>Create Event, {{this.$store.categories}}</h1> -->
  <p>{{ getEventById(2) }}</p>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>
