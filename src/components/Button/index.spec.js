// @flow

import React from 'react'
import renderer from 'react-test-renderer'

import Button from './index'

describe('#Button', () => {
  it('Renders correctly', () => {
    const component = (
      <Button
        title="Test Button"
        onValueChange={() => null}
      />
    )

    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})