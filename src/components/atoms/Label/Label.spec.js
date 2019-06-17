import React from 'react'
import renderer from 'react-test-renderer'
import Label from './index'

describe('Label', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Label />
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
