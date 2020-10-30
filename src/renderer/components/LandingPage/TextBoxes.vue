<template>
  <div id="inputboxes">
    <el-tag type="success">
      {{ date.toLocaleString('ja').split(' ')[0] }}
    </el-tag>
    <div v-for="i in 3" :key="i">
      <el-input
        placeholder="Good Thing"
        v-model="thing[i - 1]"
        clearable
      ></el-input>
    </div>
    <div id="submitbutton">
      <el-button type="primary" @click="setThings()">登録</el-button>
    </div>
  </div>
</template>

<script>
import storage from 'electron-storage'

export default {
  props: ['date'],
  data() {
    return {
      thing: []
    }
  },
  watch: {
    date: function() {
      const day = this.date
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '')
      storage.get('things.json', (err, data) => {
        if (err) {
          console.error(err)
        } else {
          if (data[day]) {
            this.thing = data[day]
          } else {
            this.thing = []
          }
        }
      })
    }
  },
  methods: {
    setThings() {
      const day = this.date
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '')
      storage.get('things.json', (err, data) => {
        if (err) {
          console.error(err)
          if (this.thing.length) {
            const things = {}
            things[day] = this.thing
            storage.set('things.json', things, err => {
              if (err) throw err
            })
          }
        } else {
          data[day] = this.thing
          if (this.thing.length) {
            storage.set('things.json', data, err => {
              if (err) throw err
            })
          }
        }
      })
    }
  }
}
</script>

<style scoped>
#inputboxes {
  margin: 1em 0em;
  width: 260px;
  height: 40vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

#submitbutton {
  display: flex;
  justify-content: flex-end;
}

.el-tag {
  text-align: center;
  font-size: 100%;
}
</style>
