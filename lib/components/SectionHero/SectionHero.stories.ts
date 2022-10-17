import { SectionHero } from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

type SectionHeroProps = InstanceType<typeof SectionHero>['$props']

export default {
  title: 'Section/SectionHero',
  component: SectionHero,
} as Meta<typeof SectionHero>

const Template: StoryFn<SectionHeroProps> = (args) => ({
  components: { SectionHero },
  setup() {
    return { args }
  },
  template: '<section-hero v-bind="args" />',
})

export const StaticBackground = Template.bind({})
StaticBackground.args = {
  title: 'Sample message',
  background: {
    url: 'https://media.graphassets.com/n3lJKillToin0h43cDGE',
  },
}
