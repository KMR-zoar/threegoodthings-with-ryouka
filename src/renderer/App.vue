<template>
  <div id="app">
    <landing-page></landing-page>
    <background></background>
  </div>
</template>

<script>
import Background from '@/components/Background'
import LandingPage from '@/components/LandingPage'

export default {
  name: 'threegoodthings-with-ryouka',
  components: {
    LandingPage,
    Background
    },
}
</script>