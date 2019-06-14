---
to: '<%= test ? `src/components/${category}/${name}/${name}.spec.js` : null %>'
---
import React from 'react'
import renderer from 'react-test-renderer'
import <%= name %> from '~/components/<%= category %>/<%= name %>'

describe('<%= name %>', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <<%= name %> />
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
