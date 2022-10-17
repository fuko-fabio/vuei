module.exports = {
  stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
}
