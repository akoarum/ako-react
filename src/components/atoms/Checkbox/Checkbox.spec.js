import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from './index'

describe('Checkbox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Checkbox name="name" value="value">テスト</Checkbox>
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
