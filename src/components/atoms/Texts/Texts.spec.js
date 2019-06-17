import React from 'react'
import renderer from 'react-test-renderer'
import Texts, { getClassNames } from './index'

describe('Texts', () => {
  let wrapper

  beforeEach(() => {
    wrapper = renderer.create(
      <Texts />
    )
  })

  describe('initialize', () => {
    it('snapshot', () => {
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('getClassNames: propsをもとにクラスを付与して返す', () => {
    it('特に何も無い場合はclassNameのみを返す', () => {
      expect(getClassNames('text')).toEqual(['text'])
    })

    it('cautionが入る場合', () => {
      expect(getClassNames('text', true)).toEqual(['text', '-caution'])
    })

    it('smallが入る場合', () => {
      expect(getClassNames('text', false, true)).toEqual(['text', '-small'])
    })
  })
})
