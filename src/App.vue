<template>
  <v-app :dark="goDark">
    <v-content>
      <v-container align-center>
        <TheHeaderVue :goDark="goDark" @changeTheme="updateTheme($event)" />

        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <TheFooterVue />
  </v-app>
</template>

<script>
import TheFooterVue from './components/TheFooter.vue'
import TheHeaderVue from './components/TheHeader.vue'

export default {
  name: 'App',

  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Paul Family Cookbook' },
      { charset: 'utf-8' },
      { property: 'og:title', content: 'Paul Family Cookbook' },
      { property: 'og:site_name', content: 'Paul Family Cookbook' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Paul Family Cookbook' }
    ]
  },

  data() {
    return { goDark: false }
  },
  components: {
    TheFooterVue,
    TheHeaderVue
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme
    }
  }
}
</script>
<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css';
</style>
