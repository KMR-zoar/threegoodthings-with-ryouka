<template>
  <div id="calendar">
    <v-date-picker :attributes="attrs" v-model="selectedDate" :select-attribute="selectAttribute" :max-date="new Date()">
    </v-date-picker>
  </div>
</template>

<script>
import storage from 'electron-storage'

export default {
  props: ['date'],
  data() {
    return {
      dataList: null,
      selectedDate: null,
      selectAttribute: {
        highlight: 'green'
      },
      attrs: []
    }
  },
  methods: {
    dataLoad() {
      storage.get('things.json', (err, data) => {
        if (err) {
          console.error(err)
          this.attrs = [
            {
              key: 'today',
              highlight: { color: 'blue', fillMode: 'none' },
              dates: new Date()
            }
          ]
        } else {
          this.attrs = [
            {
              key: 'today',
              highlight: { color: 'blue', fillMode: 'none' },
              dates: new Date()
            }
          ]
          Object.keys(data).forEach(elem => {
            this.attrs.push({
              bar: 'red',
              dates: new Date(
                elem.slice(0, 4),
                elem.slice(4, 6) - 1,
                elem.slice(6, 8)
              )
            })
          })
        }
      })
    }
  },
  created: function() {
    this.dataLoad()
    this.selectedDate = this.date
  },
  watch: {
    selectedDate: function() {
      this.$emit('change-date', this.selectedDate)
    },
    date: function() {
      this.dataLoad()
    }
  }
}
</script>
