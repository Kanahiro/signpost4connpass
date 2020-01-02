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
        </MglMap>
        <b-button
          size="lg"
          variant="outline-primary"
          @click="btnClicked">
          Bootstrap Button
        </b-button>
    </div>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import {
        MglMap,
        MglNavigationControl
    } from "vue-mapbox";

    export default {
        name: 'MapPane',
        components: {
            MglMap,
            MglNavigationControl
        },
        data() {
            return {
              center:[139.0, 39.0],
              zoom:4,
              mapStyle: this.makeMapStyle("https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png"),
            }
        },
        created() {
        },
        methods: {
            onloaded: function() {
                this.map = Mapbox
            },
            makeMapStyle: function(tileUrl) {
                return {
                    "version": 8,
                    "sources": {
                        "Raster": {
                            "type": "raster",
                            "tiles": [ tileUrl ],
                            "tileSize": 256
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
            btnClicked: function() {
              fetch("/api/?keyword_or=python")
              .then(response => {
                console.log(response.json());
              })
            }
        }
    }
</script>

<style scoped>
    .mapPane {
        height: 500px;
        margin: 0;
    }

    .MglMap {
        border: 1px solid #000000;
    }

    .tile-selector {
        width: 100%;
    }
</style>