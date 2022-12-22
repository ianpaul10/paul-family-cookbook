<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center class="mt-4 pt-2">
      <v-layout row wrap class="mt-4 pt-2">
        <RecipePreview
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnailImage="post.thumbnailUrl"
          :id="post.id"
        />
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import RecipePreview from '../components/RecipePreview'
// import StoryblokClient from 'storyblok-js-client'
// const token = 'iyPj3vEKmPladyz3zeqKuwtt'
// const storyapi = new StoryblokClient({
//   accessToken: token
// })

export default {
  metaInfo: {
    title: 'Blog',
    meta: []
  },
  data() {
    return {
      posts: [
        {
          id: 'im-a-recipe',
          title: "I'm a title",
          previewText: 'bp.content.summary',
          thumbnailUrl: 'https://i.imgur.com/zpZDgLw.jpeg'
        },
        {
          id: 'im-a-recipe-2',
          title: "I'm a title 2",
          previewText: 'bp.content.summary xyz',
          thumbnailUrl:
            'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url.jpg'
        }
      ]
    }
  },

  created() {
    this.getStory('home', 'published')
  },

  methods: {
    getStory(version) {
      return {
        id: 'im-a-recipe',
        title: "I'm a title",
        previewText: 'bp.content.summary',
        thumbnailUrl: 'https://imgur.com/gallery/6a9LvCO'
      }
    }
  },

  components: {
    RecipePreview
  }
}
</script>

<style scoped></style>
