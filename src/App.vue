<template>
    <div>
      <header-component></header-component>
      <router-view></router-view>
      <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  created() {
    console.log("I know you'll like me :D");
  }
}
</script>

<style>

</style>
