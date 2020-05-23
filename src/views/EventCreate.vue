<template>
<div>
  <h1>Create Event, {{user.name}}</h1>
  <p>This event is created by {{ user.name }}</p>
  <h1>Create Event, {{this.$store.categories.lenght}}</h1>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['user', 'categories'])
}
</script>
