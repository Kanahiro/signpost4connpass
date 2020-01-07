<template>
  <div id="app">
    <Header />
    <SearchPanel @onGetApiData="showEvents" />
    <MapPane id="mapPane" :events="events" />
    <EventsList
      v-if="events.length > 0"
      :events="events"
    />
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
      events:[],
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

#mapPane {
  margin:0 5px;
}
</style>
