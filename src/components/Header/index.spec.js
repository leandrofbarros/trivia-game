// @flow

import React from 'react'
import renderer from 'react-test-renderer'

import Header from './index'

describe('#Button', () => {
  it('Renders correctly', () => {
    const component = (
      <Header
        title="Test Title"
        subtitle="Test subtitle"
      />
    )

    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})