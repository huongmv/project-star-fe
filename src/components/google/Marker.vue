<template>
    <div></div>
</template>

<script>
export default {
    props: {
        latitude: String, 
        longitude: String, 
        icon: {
            type: String,
            default: '/images/pin.png'
        }
    },
    data(){
        return {
            map: null,
            api: null,
            marker: null
        }
    },
    inject: ["getMap"],
    watch: {
        latitude(){ this.updatePosition() },
        longitude(){ this.updatePosition() }
    },
    mounted(){
        let self = this
        this.getMap(function(map, api){
            self.map = map;
            self.api = api;

            self.marker = new api.Marker({
                position: new api.LatLng(self.latitude, self.longitude),
                map: map,
                icon: self.icon,
            });

            self.marker.addListener("click", () => {
                self.$emit('click', self.marker)
            });
        })
        
    },
    beforeUnmount(){
        this.marker.setMap(null);
        this.marker = null;
    },
    methods: {
        updatePosition(){
            this.marker.setPosition( new this.api.LatLng( parseFloat(this.latitude), parseFloat(this.longitude) ) );
        }
    }
}
</script>