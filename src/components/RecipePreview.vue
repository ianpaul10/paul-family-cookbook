<template>
  <v-flex xs12 sm6 md4 lg4 xl4>
    <v-card :to="'/recipes/' + slug" hover>
      <v-img
        :src="thumbnailImage"
        aspect-ratio="2.75"
        height="230"
        :alt="title"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ title }}</h3>
          <!-- <div>
            <p class="blue--text font-weight-medium">{{ subtitle }}</p>
          </div> -->
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
