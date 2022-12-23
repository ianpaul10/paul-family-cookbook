import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const allRecipes = ref<Recipe[]>([])
const currentRecipe = ref<Recipe>()

async function fetchRecipes() {
  try {
    const { data: recipes, error } = await supabase
      .from('recipes')
      .select('*')
      .order('created_at')

    if (error) {
      console.log('error', error)
      return
    }

    if (recipes === null) {
      allRecipes.value = []
      return
    }

    allRecipes.value = recipes
    console.log('successfully got recipes', allRecipes.value)
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
      throw new Error('Error when getting info from supabase.')
    }

    if (recipe === null) {
      // can probably be smarter here
      throw new Error('Recipe not found.')
    }

    currentRecipe.value = recipe[0]
    console.log('successfully got recipes', allRecipes.value)
  } catch (err) {
    console.error('Error retrieving data from db', err)
    throw new Error('Unhandled error.')
  }
}

export { allRecipes, currentRecipe, fetchRecipes, fetchRecipe }
