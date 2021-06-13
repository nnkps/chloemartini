<template>
    <div class="vimeo-video">
        <iframe class="vimeo-inside" v-bind:src="'https://player.vimeo.com/video/' + videoId + '?title=0&byline=0&portrait=0'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
  props: {
    videoId: String
  }
}
</script>

<style scoped>
.vimeo-video {
  padding: 56.25% 0 0 0;
  position: relative;
}
.vimeo-inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>