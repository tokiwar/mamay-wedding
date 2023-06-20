<template>
  <client-only>
    <YandexMap
        :class="{'h-[700px]' : !$device.isMobile, 'h-[350px]' : $device.isMobile}"
        :coordinates="coordinates"
        :detailed-controls="detailedControls"
        :controls="controls"
        :zoom="zoom"
        @created="createHandler"
    >
      <yandex-marker
          :coordinates="marker.coords"
          :marker-id="marker.key"
          :properties="{
            hintContent: marker.hint,
          }"
          :options="{
             iconLayout: 'default#image',
             iconImageHref: useAsset('img/svg/map.svg'),
             iconImageSize : [34, 41],
             iconOffset: [0, -20]
          }"
          v-for="marker in items">
      </yandex-marker>
    </YandexMap>
  </client-only>
</template>
<script>
import {YandexMap, YandexMarker} from 'vue-yandex-maps'

export default {
  name: 'MapItem',
  data: () => ({
    coordinates: [45.032581, 38.993007],
    controls: [],
    detailedControls: {zoomControl: {position: {right: 10, top: 50}}},
    items: [
      {key: 0, coords: [45.004130, 38.960518], hint: 'Банкетный зал'},
      {key: 1, coords: [45.060000, 38.987404], hint: 'ЗАГС'}
    ]
  }),
  computed: {
    zoom() {
      if (!this.$device.isMobile) {
        return 13;
      } else {
        return 12;
      }
    },
  },
  methods: {
    createHandler() {
      this.$bus.$emit("mapCreated");
    },
    useAsset(path) {
      const assets = import.meta.glob('~/assets/**/*', {
        eager: true,
        import: 'default',
      })
      return assets['/assets/' + path]
    }
  }
}
</script>