<template lang="html">
  <div class="loading-page fade-in" v-if="loading">
    <img width="250" src="https://media.giphy.com/media/Y3wi040tnpVR0Ygdrj/giphy.gif" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () { 
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>