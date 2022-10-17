<template>
  <div class="relative flex items-center h-screen mb-0 overflow-hidden">
    <div
      class="relative container mx-auto z-30 md:max-w-6xl text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl p-3"
    >
      <h1 v-if="title" class="h2 xs:h1 stroke uppercase whitespace-pre-wrap">
        {{ title }}
      </h1>
      <h4 v-if="subhead">{{ subhead }}</h4>
      <h4 v-if="description">{{ description }}</h4>
    </div>
    <img
      v-if="background"
      :alt="title"
      class="heroBackground"
      :src="background.url"
    />
    <video
      v-if="video"
      autoplay
      class="heroBackground"
      loop
      muted
      :src="video.url"
      :type="video.mimeType"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import type { PropType } from 'vue-demi'

interface SectionHeroProps {
  video?: {
    url: string
    mimeType: string
  }
  title?: string
  subhead?: string
  description?: string
  background?: {
    url: string
  }
}

/**
 * This is my amazing component
 *
 * It can render beautiful hero!
 */
export default defineComponent({
  props: {
    /**
     * Main banner title
     */
    title: {
      type: String as PropType<string>,
      required: false,
      default: undefined,
    },
    subhead: {
      type: String as PropType<string>,
      required: false,
      default: undefined,
    },
    description: {
      type: String as PropType<string>,
      required: false,
      default: undefined,
    },
    background: {
      type: Object as PropType<SectionHeroProps['background']>,
      required: false,
      default: undefined,
    },
    video: {
      type: Object as PropType<SectionHeroProps['video']>,
      required: false,
      default: undefined,
    },
  },
})
</script>

<style lang="scss" scoped>
.heroBackground {
  @apply absolute z-10 w-auto min-w-full max-w-none min-h-full;
}
</style>
