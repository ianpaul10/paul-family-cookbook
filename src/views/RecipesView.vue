<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center class="mt-4 pt-2">
      <v-layout row wrap class="mt-4 pt-2">
        <RecipePreview
          v-for="recipe in allRecipes"
          :key="recipe.id"
          :title="recipe.title"
          :excerpt="recipe.created_at"
          :thumbnailImage="
            recipe.thumbnail_url ||
            'https://cdn.pixabay.com/photo/2016/06/29/16/29/cartoon-1487217_1280.png'
          "
          :id="recipe.id"
        />
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { allRecipes, fetchRecipes } from '@/vuetils/useRecipes'
import RecipePreview from '../components/RecipePreview.vue'

export default {
  setup() {
    fetchRecipes()

    return { allRecipes }
  },

  components: {
    RecipePreview
  }
}
</script>

<style scoped></style>
