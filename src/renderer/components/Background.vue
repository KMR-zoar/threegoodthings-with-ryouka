<template>
  <div id="attribute">
    <div @click="urlopen('https://www.884ph.com/guidelines.html')">
      Image by ©ハヤシ薬局
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    urlopen: function(url) {
      const { shell } = require('electron')
      shell.openExternal(url)
    }
  }
}
</script>

<style>
#app {
  background-image: url('../assets/ryouka2020_02.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: -25px;
}

#attribute {
  position: absolute;
  left: 1em;
  bottom: 1em;
}

#attribute div {
  color: black;
  text-decoration: none;
  font-size: 80%;
}

#attribute div:hover {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
