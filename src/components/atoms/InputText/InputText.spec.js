import React from 'react'
import renderer from 'react-test-renderer'
import InputText from './index'

describe('InputText', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <InputText />
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
