import React from 'react'
import renderer from 'react-test-renderer'
import { ScrollContainer } from '..'

const props = {
  isFetching: true,
  onLoadMore: jest.fn(),
}

describe('ScrollContainer', () => {
  test('ScrollContainer renders correctly', () => {
    const tree = renderer.create(
      <ScrollContainer {...props}>
        Children
      </ScrollContainer>
    ).toJSON()
    expect(tree).toMatchSnapshot()
    expect(props.onLoadMore).toHaveBeenCalledTimes(0)
  })
})
