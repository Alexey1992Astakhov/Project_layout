<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <HomeMainComponent></HomeMainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeMainComponent from './components/HomeMainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HomeMainComponent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
</style>
