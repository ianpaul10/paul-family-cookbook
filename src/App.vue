<template>
  <v-app>
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

  data: () => ({
    //
  }),
  components: {
    TheFooterVue,
    TheHeaderVue
  }
}
</script>
