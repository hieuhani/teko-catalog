import { thoundsandDelimiter } from '../number'

describe('Number helpers: thoundsandDelimiter', () => {
  test('with a valid number should return a formatted number ', () => {
    const output = thoundsandDelimiter(19002030)
    expect(output).toEqual('19.002.030')
  })
  test('undefined should return an empty string', () => {
    const output = thoundsandDelimiter(undefined)
    expect(output).toEqual('')
  })
})
