import React from 'react'
import renderer from 'react-test-renderer'
import Radio from './index'

describe('Radio', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Radio name="name" value="value">テスト</Radio>
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
