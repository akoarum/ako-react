import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Button>テスト</Button>
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
