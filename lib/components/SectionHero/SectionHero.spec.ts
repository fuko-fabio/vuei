import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import SectionHero from './SectionHero.vue'

describe('SectionHero', () => {
  const VIDEO = { url: 'http://you.tube/', mimeType: 'application/x-video' }
  let wrapper: VueWrapper

  describe('with no information given', () => {
    beforeEach(() => {
      wrapper = shallowMount(SectionHero, {
        props: {},
      })
    })

    it('does not render headline element', () => {
      expect(wrapper.find('h1').exists()).toBeFalsy()
    })

    it('does not render any subheadline elements', () => {
      expect(wrapper.find('h4').exists()).toBeFalsy()
    })

    it('does not render image element', () => {
      expect(wrapper.find('img').exists()).toBeFalsy()
    })
  })

  describe('with full set of information', () => {
    beforeEach(() => {
      wrapper = shallowMount(SectionHero, {
        props: {
          video: VIDEO,
          title: 'The Empire Strikes Back',
          subhead: 'It really doesn’t.',
          description: 'Well, at least they froze Han.',
          background: {
            url: 'http://imperi.al/logo.png',
          },
        },
      })
    })

    it('does render given video', () => {
      expect(wrapper.find('video').attributes()['src']).toEqual(VIDEO.url)
    })

    it('does render the headline element', () => {
      expect(wrapper.find('h1').text()).toEqual('The Empire Strikes Back')
    })

    it('does not render the subhead as subheadline element', () => {
      expect(wrapper.findAll('h4')[0].text()).toEqual('It really doesn’t.')
    })

    it('does not render the description as another subheadline element', () => {
      expect(wrapper.findAll('h4')[1].text()).toEqual(
        'Well, at least they froze Han.',
      )
    })
    it('does render the background image', () => {
      expect(
        wrapper.find('img[src="http://imperi.al/logo.png"]').exists(),
      ).toBeTruthy()
    })
  })
})
