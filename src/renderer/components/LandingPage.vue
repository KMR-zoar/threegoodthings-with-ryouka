<template>
  <div id="wrapper">
    <calendar id="cal" :date="date" @change-date="dateUpdate"></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/LandingPage/Calendar'

export default {
  name: 'landing-page',
  components: {
    Calendar
  },
  data() {
    return {
      date: new Date()
    }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link)
    }
  },
  methods: {
    dateUpdate: function(selectedDate) {
      this.date = selectedDate
    },
    jsonUpdate: function(day) {
      this.date = new Date(
        day.slice(0, 4),
        day.slice(4, 6) - 1,
        day.slice(6, 8)
      )
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

#wrapper {
  height: 100vh;
  padding: 2em 1em 2em 55%;
  width: 50vw;
}
</style>
