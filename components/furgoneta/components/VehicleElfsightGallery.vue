<template>
  <div>
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div :class="getElfsightClass()"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BL: 'elfsight-app-66c39019-804c-4f8e-a9f0-bc7ec20429ec',
      RD: 'elfsight-app-3090e056-9718-4d6a-9bf4-4ad09822078d'
    }
  },
  methods: {
    getElfsightClass(){
      return this[this.vehicle.VehiculoID]
    }
  },
  mounted() {
    
  },
  props: ["vehicle"]
};
</script>