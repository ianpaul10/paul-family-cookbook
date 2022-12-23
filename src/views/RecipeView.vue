<template>
  <div>
    <br />
    <v-card elevation="4" class="mx-auto">
      <v-img
        :src="
          currentRecipe?.thumbnail_url ||
          'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/hero-and-hub/food/food-hero-1260x600.jpg'
        "
        height="200px"
      ></v-img>
      <v-card-title>
        <h1>
          {{ currentRecipe?.title }}
        </h1>
      </v-card-title>
      <v-cart-text>
        <div class="col-md-12" v-html="HtmlBody"></div>
      </v-cart-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { currentRecipe, fetchRecipe } from '@/vuetils/useRecipes'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { unref } from 'vue'
import { Vue } from 'vue-property-decorator'

export default class RecipeView extends Vue {
  get currentRecipe() {
    const slug = this.$route.params.slug
    fetchRecipe(slug as string)

    return unref(currentRecipe)
  }

  get HtmlBody(): string {
    const dirtyHtml = marked(this.currentRecipe?.details)
    console.log(dirtyHtml)
    return DOMPurify.sanitize(dirtyHtml).replace(/(?:\r\n|\r|\n|\t)/g, '')
  }
}
</script>

<style scoped></style>
