<!--

 1. onClickMap => function return value lat, lng when click gooogle maps   
-->
<template>
    <div>
        <GoogleMap :api-key="GOOGLE_API" style="width: 100%; height: 500px" :center="center" :zoom="zoom"
            @click="onClickMap">
            <Marker :options="marker" :clickable="true" :draggable="true" />
            <!-- <Marker 
                :key="index"
                v-for="(m, index) in marker"
                :options="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            /> -->
        </GoogleMap>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, watch } from 'vue'
import { GoogleMap, Marker, Polyline } from "vue3-google-map"
import Utils from '@/utils/Utils'
import { GOOGLE_API } from '@/config/app'
import { emit } from 'process';
const emits = defineEmits(["onClickMap"])
// interface props {
//     propsParam?: object
// }

interface props {
    lat: number,
    lng: number,
    zoom: number
}
onMounted(() => {
    center.lat = propsMaps.lat
    center.lng = propsMaps.lng
    zoom.value = propsMaps.zoom
    marker.position.lat = propsMaps.lat
    marker.position.lng = propsMaps.lng
})

const propsMaps = withDefaults(defineProps<props>(), {})
// const defineValue = JSON.parse(JSON.stringify(ref<googleMaps | null>()))
// const setGoogleMaps = JSON.parse(JSON.stringify(propsMaps.propsParam))
const marker = { position: { lat: 0, lng: 0 } }
 const markers = [
        {
          position: {
            lat: 21.0285136,
            lng: 105.8286727,
          },
        }
        
      ]
const center = { lat: 0, lng: 0 }
const zoom = ref(0)
const onClickMap = (event) => {
    center.lat = event.latLng.lat()
    center.lng = event.latLng.lng()
    marker.position.lat = event.latLng.lat()
    marker.position.lng = event.latLng.lng()
    let dataClick = { latClick: event.latLng.lat(), lngClick: event.latLng.lng(), zoom: zoom.value }
    emits("onClickMap", dataClick)
    // center.value = { lat: event.latLng.lat(), lng: event.latLng.lng() }
}

</script>
