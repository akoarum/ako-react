import React from 'react'
import renderer from 'react-test-renderer'
import Heading from './index'

describe('Heading', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Heading>テキスト</Heading>
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
