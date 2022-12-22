import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const allRecipes = ref<Recipe[]>([])

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

async function fetchRecipe(slug: string): Promise<Recipe | null> {
  try {
    const { data: recipe, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('slug', slug)

    if (error) {
      console.log('error', error)
      return null
    }

    if (recipe === null) {
      // can probably be smarter here
      return null
    }

    console.log('successfully got recipes', allRecipes.value)
    return recipe[0]
  } catch (err) {
    console.error('Error retrieving data from db', err)
    return null
  }
}

export { allRecipes, fetchRecipes, fetchRecipe }
