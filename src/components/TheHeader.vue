<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      width="150"
      height="340"
    >
      <v-list class="pt-4">
        <v-list-tile active-class="blue--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>RECIPES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="blue--text" to="/tags">
          <v-list-tile-content>
            <v-list-tile-title>TAGS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Paul Family </span>
        <span class="blue--text">Cookbook</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark == true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          to="/"
          active-class="blue--text headline"
          color="transparent"
          elevation="0"
          >Recipes</v-btn
        >
        <v-btn
          flat
          to="/tags"
          active-class="blue--text headline"
          color="transparent"
          elevation="0"
          >Tags</v-btn
        >
        <v-btn @click="changeTheme" depressed small icon>
          <v-icon v-if="goDark == true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    goDark: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: null
    }
  },
  methods: {
    changeTheme() {
      console.log('Theme changed')
      console.log(this.goDark)

      this.$emit('changeTheme', this.goDark)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  mounted() {
    const theme = localStorage.getItem('darkTheme')

    // Check if the user has set the theme state before
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.$vuetify.theme.dark = true
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark.toString())
    }
  }
}
</script>

<style></style>
