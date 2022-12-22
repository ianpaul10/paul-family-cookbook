<template>
  <p>recipe.details</p>
</template>

<script lang="ts">
import { fetchRecipe } from '@/vuetils/useRecipes'

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  setup(props: any) {
    const recipe = fetchRecipe(props.slug)

    return { recipe }
  }
}
</script>

<style scoped></style>
