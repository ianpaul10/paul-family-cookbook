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
import { allRecipes, fetchRecipes } from '@/vuetils/useRecipes'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class RecipeView extends Vue {
  // eslint-disable-next-line no-undef
  curRec: Recipe | undefined | null = null
  curSlug: string = ''

  get currentRecipe() {
    const slug = this.$route.params.slug

    if (this.curRec === null || this.curSlug !== slug) {
      fetchRecipes()
      const curRec = allRecipes.value.find((x) => x.slug === slug)

      this.curSlug = slug
      this.curRec = curRec
    }

    // eslint-disable-next-line no-undef
    return this.curRec as Recipe
  }

  get HtmlBody(): string {
    const dirtyHtml = marked(this.currentRecipe.details)
    console.log(dirtyHtml)
    return DOMPurify.sanitize(dirtyHtml).replace(/(?:\r\n|\r|\n|\t)/g, '')
  }
}
</script>

<style scoped></style>
