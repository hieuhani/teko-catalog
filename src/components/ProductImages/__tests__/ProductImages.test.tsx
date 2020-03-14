import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { ProductImages } from '..'
import { theme } from '../../../theme'

const props = {
  images: [{
    url: 'testurl',
    priority: 1,
  }]
}
describe('ProductImages', () => {
  test('ProductImages renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <ProductImages {...props} />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
