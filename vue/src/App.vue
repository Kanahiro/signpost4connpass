<template>
  <div id="app">
    <Header />
    <SearchPanel @onGetApiData="showEvents" />
    <MapPane :events="events" />
    <EventsList :events="events" v-if="events.length > 0" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SearchPanel from './components/SearchPanel.vue'
import MapPane from './components/MapPane.vue'
import EventsList from './components/EventsList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    SearchPanel,
    MapPane,
    EventsList,
    Footer
  },
  data() {
    return {
      events:[]
    }
  },
  methods: {
    showEvents: function(jsonData) {
      this.events = jsonData.events
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
