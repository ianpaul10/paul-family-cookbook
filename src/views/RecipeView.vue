<template>
  <v-card elevation="4">
    <v-card-title
      ><p>
        {{ myRecipe?.title }}
      </p>
    </v-card-title>
    <v-cart-text>
      <p>
        {{ myRecipe?.details }}
      </p>
    </v-cart-text>
  </v-card>
</template>

<script lang="ts">
import { currentRecipe, fetchRecipe } from '@/vuetils/useRecipes'
import { unref } from 'vue'
import { Vue } from 'vue-property-decorator'

export default class RecipeView extends Vue {
  get myRecipe() {
    const slug = this.$route.params.slug
    fetchRecipe(slug as string)

    return unref(currentRecipe)
  }
}
</script>

<style scoped></style>
