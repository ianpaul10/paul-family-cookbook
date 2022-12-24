import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const allRecipes = ref<Recipe[]>([])
const currentRecipe = ref<Recipe>()

async function fetchRecipes() {
  try {
    const { data: recipes, error } = await supabase
      .from('recipes')
      .select('*')
      .order('title')

    if (error) {
      console.log('error', error)
      return
    }

    if (recipes === null) {
      allRecipes.value = []
      return
    }

    allRecipes.value = recipes

    console.log('successfully got recipes', recipes)
  } catch (err) {
    console.error('Error retrieving data from db', err)
  }
}

async function fetchRecipe(slug: string) {
  try {
    const { data: recipe, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('slug', slug)

    if (error) {
      console.log('error', error)
      return
    }

    if (recipe === null) {
      // can probably be smarter here
      // currentRecipe.value = null
      return
    }

    console.log('successfully got recipes', allRecipes.value)
    currentRecipe.value = recipe[0]
  } catch (err) {
    console.error('Error retrieving data from db', err)
  }
}

export { allRecipes, currentRecipe, fetchRecipes, fetchRecipe }
