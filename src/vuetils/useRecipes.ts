import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const allRecipes = ref<Recipe[]>([])

/**
 * Retrieve all todo for the signed in user
 */
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

export { allRecipes, fetchRecipes }
