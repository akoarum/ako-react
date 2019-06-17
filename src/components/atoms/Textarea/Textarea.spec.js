import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from './index'

describe('Textarea', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Textarea />
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
