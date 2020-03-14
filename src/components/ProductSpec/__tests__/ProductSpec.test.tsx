import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { ProductSpec } from '..'
import { theme } from '../../../theme'

const fakeAttributeGroups = [{
  name: 'Fake name',
  value: 'Fake value',
}]

describe('ProductSpec', () => {
  test('ProductSpec renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <ProductSpec attributeGroups={fakeAttributeGroups} />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
