import { navigationReducer, State, Action, useNavigationState } from '../navigation'

const initialState: State = {
  stack: [{
    name: 'PRODUCT_LISTING',
  }]
}
describe('navigationReducer', () => {
  test('dispatch PUSH to navigationReducer', () => {
    const pushAction: Action = {
      type: 'PUSH',
      payload: {
        name: 'PRODUCT_DETAIL',
        payload: {
          sku: '1020020',
        },
      },
    }
    const newState = navigationReducer(initialState, pushAction)
    expect(newState).toEqual({
      stack: [{
        name: 'PRODUCT_LISTING',
      }, {
        name: 'PRODUCT_DETAIL',
        payload: {
          sku: '1020020',
        },
      }]
    })
  })

  test('dispatch POP to navigationReducer', () => {
    const popAction: Action = {
      type: 'POP',
    }
    const pushAction: Action = {
      type: 'PUSH',
      payload: {
        name: 'PRODUCT_DETAIL',
        payload: {
          sku: '1020020',
        },
      },
    }
    const firstState = navigationReducer(initialState, pushAction)

    const secondState = navigationReducer(firstState, popAction)
    expect(secondState).toEqual({
      stack: [{
        name: 'PRODUCT_LISTING',
      }]
    })

    const thirdState = navigationReducer(secondState, popAction)
    expect(thirdState).toEqual({
      stack: [{
        name: 'PRODUCT_LISTING',
      }]
    })
  })
})
