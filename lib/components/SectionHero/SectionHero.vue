<script lang="ts">
import { defineComponent, h, type PropType } from 'vue-demi'

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
  name: 'SectionHero',
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
  render() {
    const headline = this.title
      ? h(
          'h1',
          {
            class: 'h2 xs:h1 stroke uppercase whitespace-pre-wrap',
          },
          this.title,
        )
      : undefined
    const subhead = this.subhead ? h('h4', {}, this.subhead) : undefined
    const description = this.subhead ? h('h4', {}, this.description) : undefined
    const img = this.background
      ? h('img', {
          [`${this.$options.__scopeId}`]: '',
          class: 'heroBackground',
          attrs: {
            alt: this.title,
            src: this.background.url,
          },
        })
      : undefined
    const video = this.video
      ? h('video', {
          [`${this.$options.__scopeId}`]: '',
          class: 'heroBackground',
          attrs: {
            autoplay: true,
            loop: true,
            muted: true,
            src: this.video.url,
            type: this.video.mimeType,
          },
        })
      : undefined

    return h(
      'div',
      {
        class: 'relative flex items-center h-screen mb-0 overflow-hidden',
      },
      [
        h(
          'div',
          {
            class:
              'relative container mx-auto z-30 md:max-w-6xl text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl p-3',
          },
          [headline, subhead, description],
        ),
        img,
        video,
      ],
    )
  },
})
</script>

<style lang="scss">
.heroBackground {
  @apply absolute z-10 w-auto min-w-full max-w-none min-h-full;
}
</style>
