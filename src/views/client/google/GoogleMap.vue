<template>
    <div>
        <!-- https://vue3-google-map.com/components/marker.html -->
        <GoogleMap api-key="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg" 
        mapTypeId="terrain"
        style="width: 100%; height: 500px"
            :center="center" :zoom="15"  @click="onClickMap">
            <Marker :options="{ position: center }"/>
            <!-- <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER', zIndex: 2 }">
                <div style="text-align: center" @click="clickMarker">
                    <div style="font-size: 1.125rem; color: red;">
                        <div>A Thao đây rồi</div>
                        <div>1,000m2</div>
                        <div>5tỷ</div>
                    </div>
                    <i style="font-size: 2.125rem; color: red;" class="fa-solid fa-location-dot" width="50" height="50"></i>
                </div>
            </CustomMarker> -->
            <!-- <Rectangle :options="rectangle" /> -->
            <Polygon :options="bermudaTriangle" @click="clickProject('Dự án số 001')"><div class="polygon-map"></div></Polygon>
        </GoogleMap>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, watch } from 'vue'
import { GoogleMap, Marker, CustomMarker, Rectangle, Polygon   } from "vue3-google-map"
const center = { lat: 21.0317677, lng: 105.8374361 }
const triangleCoords = [
  { lat: 21.028643268666496, lng: 105.82544126128542 },
  { lat: 21.03969865453835, lng: 105.83930291747438 },
  { lat: 21.028803497507848, lng: 105.84192075347292 },
  { lat: 21.028643268666496, lng: 105.82544126128542 },
]
const bermudaTriangle = {
  paths: triangleCoords,
  strokeColor: 'red',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.1,
  zIndex: 1,
  draggable:true,
  geodesic:true,
}
const rectangle = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  bounds: {
    north: 33.685,
    south: 33.671,
    east: -116.234,
    west: -116.251,
  },
}
// 21.4139969,102.9999704
const name = ref('')
const clickProject = (event: any) => {
    console.log(event)
}
const clickMarker = (event: any) => {
    console.log('clickMarker')
    console.log(event)
}

const onClickMap = (event: any) => {
    console.log(event.latLng.lng())
    console.log(event.latLng.lat())
}
// onMounted(() => {
//         google.maps.event.addListener(map, "click", (event)  => {
//             console.log('aaaaaaaaaa')
//          })
// })
</script>
<style lang="css">
.polygon-map {
    border: aqua solid 5px
}
</style>