import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { ProductDetail, Wrapper } from '..'
import { theme } from '../../../theme'
import { NavigationProvider } from '../../../contexts/navigation'

describe('ProductDetail', () => {
  test('ProductDetail renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <ProductDetail sku="102034" />
        </NavigationProvider>
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('styled Wrapper', () => {
  test('styled Wrapper renders background-color correctly', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
