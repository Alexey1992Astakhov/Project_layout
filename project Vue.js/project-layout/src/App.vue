<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <HomeMainComponent></HomeMainComponent>
    <HomeProjectComponent></HomeProjectComponent>
    <HomeCounterComponent></HomeCounterComponent>
    <HomeArticlesComponent></HomeArticlesComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeMainComponent from './components/HomeMainComponent.vue';
import HomeProjectComponent from './components/HomeProjectComponent.vue';
import HomeCounterComponent from './components/HomeCounterComponent.vue';
import HomeArticlesComponent from './components/HomeArticlesComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeMainComponent,
    HomeProjectComponent,
    HomeCounterComponent,
    HomeArticlesComponent,
    FooterComponent
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.btrr {
    border-top-right-radius: 100px;
}

.btlr {
    border-top-left-radius: 100px;
}

.bbrr {
    border-bottom-right-radius: 100px;
}

.bblr {
    border-bottom-left-radius: 100px;
}

.center {
padding-left: calc(50% - 600px);
padding-right: calc(50% - 600px);
}
</style>
