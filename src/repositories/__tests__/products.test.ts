import { get, search } from '../products'
import { api } from '../../services/api'
jest.mock('../../services/api', () => ({
  api: {
    get: jest.fn()
  }
}))

describe('get', () => {
  test('get not ok', () => {
    api.get.mockImplementation(() => {
      return Promise.resolve({ ok: false, problem: 'octopos' })
    })
    expect(get('sample_sku')).rejects.toBe('octopos')
  })
  test('get ok', () => {
    const fakeData = {
      result: {
        product: {
          sku: 'sample_sku',
        }
      }
    }
    api.get.mockImplementation(() => {
      return Promise.resolve({ ok: true, data: fakeData})
    })
    expect(get(fakeData.result.product.sku)).resolves.toBe(fakeData.result.product)
  })
})

describe('search', () => {
  test('search not ok', () => {
    api.get.mockImplementation(() => {
      return Promise.resolve({ ok: false, problem: 'octopos' })
    })
    expect(search({
      _page: 1,
    })).rejects.toBe('octopos')
  })

  test('search ok', () => {
    const fakeSearchResponse = {}
    api.get.mockImplementation(() => {
      return Promise.resolve({ ok: true, data: fakeSearchResponse })
    })
    expect(search({
      _page: 1,
    })).resolves.toEqual(fakeSearchResponse)
  })
})
