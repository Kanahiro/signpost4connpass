<template>
    <div class="mapPane">
        <MglMap
            class="MglMap"
            :mapStyle="mapStyle"
            :center="center"
            :zoom="zoom"
            @load="onloaded"
        >
        <MglNavigationControl
            position="top-left"
        ></MglNavigationControl>
        <MglMarker
            v-for="event in events"
            :key="event.event_id"
            :coordinates="latlonAry(event)"
            color='green'
        >
            <MglPopup>
                <div>
                    <a :href="event.event_url"><h6>{{ event.title }}</h6></a>
                    <p>{{ event.catch }}</p>
                    <table>
                        <tr><td>開催日時</td><td>{{ dateToString(event.started_at) }}</td></tr>
                        <tr><td>会場</td><td>{{ event.place }}</td></tr>
                    </table>
                </div>
            </MglPopup>
        </MglMarker>
        </MglMap>
    </div>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import {
        MglMap,
        MglNavigationControl,
        MglMarker,
        MglPopup
    } from "vue-mapbox";

    export default {
        name: 'MapPane',
        components: {
            MglMap,
            MglNavigationControl,
            MglMarker,
            MglPopup
        },
        props: {
            events:Array
        },
        data() {
            return {
              center:[139.0, 38.5],
              zoom:3.5,
              mapStyle: this.makeMapStyle("https://tile.openstreetmap.jp/{z}/{x}/{y}.png", "map data © OpenStreetMap contributors"),
            }
        },
        created() {
        },
        methods: {
            onloaded: function() {
                this.map = Mapbox
            },
            makeMapStyle: function(tileUrl, attribution) {
                return {
                    "version": 8,
                    "sources": {
                        "Raster": {
                            "type": "raster",
                            "tiles": [ tileUrl ],
                            "tileSize": 256,
                            "attribution": attribution
                        }
                    },
                    "layers": [{
                        "id": "RasterLayer",
                        "type": "raster",
                        "source": "Raster",
                        "minzoom": 0,
                        "maxzoom": 18
                    }]
                }
            },
            latlonAry: function(event) {
                return [event.lon, event.lat]
            },
            dateToString: function(dateTime) {
                let date = new Date(dateTime)
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let day = date.getDate()
                let time = date.getTime()
                return String(year) + "/" + String(month) + "/" + String(day)
            }
        },
        computed: {
        }
    }
</script>

<style scoped>
    .mapPane {
        height: 400px;
        margin: 0;
        border: 1px solid #000000;
    }
</style>