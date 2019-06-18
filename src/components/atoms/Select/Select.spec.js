import React from 'react'
import renderer from 'react-test-renderer'
import Select from './index'

describe('Select', () => {
  let wrapper
  const options = [
    { id: 1, label: '項目1' },
    { id: 2, label: '項目2' },
    { id: 3, label: '項目3' }
  ]

  beforeEach(() => {
    wrapper = renderer.create(
      <Select name="name" options={options} value="" />
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
