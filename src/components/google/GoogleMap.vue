<template>
    <div class="map-container">
        <div class="google-map" ref="map"></div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
    props: { 
        latitude: {
            type: [String, Number],
            default: 0
        }, 
        longitude: {
            type: [String, Number],
            default: 0
        },
        zoom: {
            type: Number,
            default: 15
        },
    },
    data(){
        return {
            map: null,
            api: null,
            move: null,
        }
    },
    provide: function () {
        return {
            getMap: this.getMap
        }
    },
    watch: {
        latitude(){ this.updateCenter() },
        longitude(){ this.updateCenter() }
    },
    methods: {
        getMap(callback){
            var self = this;
            function checkForMap() {
              if (self.map) {
                callback(self.map, self.api);
              } else {
                setTimeout(checkForMap, 50);
              }
            }
            checkForMap();
        },
        updateCenter(){
            let center = new this.api.LatLng(this.latitude, this.longitude);
            this.map.panTo(center);
        }
    },  
    mounted(){
        let self = this
        let apiKey = document.getElementById('AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg').value
        let loader = new Loader({
            apiKey:  apiKey,
            version: "weekly",
            libraries: ["geometry"]
        });
        loader.load()
            .then((google) => {
                self.api = google.maps;
                self.map = new google.maps.Map(self.$refs.map, {
                    center: {
                        lat: parseFloat(self.latitude), 
                        lng: parseFloat(self.longitude)
                    },
                    zoom: self.zoom,
                    disableDefaultUI: true,
                });

                // Configure the click listener.
                self.map.addListener("click", (mapsMouseEvent) => {
                    self.$emit('click', mapsMouseEvent)
                });

                // Configure the move listener.
                self.map.addListener("bounds_changed", () => {   
                    if(self.move) clearTimeout(self.move);
                    self.move = setTimeout(() => {
                        let bounds = self.map.getBounds(true);
                        let center = self.map.getCenter();
                        let radius = 100000;

                        if(bounds && center){
                            let northEast = bounds.getNorthEast();
                            radius = self.api.geometry.spherical.computeDistanceBetween(center, northEast);
                        }

                        self.$emit('move', {
                            bounds: bounds,
                            radius: Math.round(radius),
                            center: {
                                latitude: center.lat(),
                                longitude: center.lng()
                            }
                        })
                    }, 800); 
                });
              
            })
            .catch(e => {});
  
    }    
}
</script>