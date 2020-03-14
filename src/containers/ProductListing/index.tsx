import React, { useCallback, useEffect, useState, useRef, ChangeEvent } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { search, ProductSearchParams, Product } from '../../repositories/products'
import { NavigationBar } from '../../components/NavigationBar'
import { ScrollContainer } from '../../components/ScrollContainer'
import { useNavigationDispatch } from '../../contexts/navigation'
import ProductRow from '../../components/ProductRow'
import { useIsOnline } from '../../hooks/use-is-online'

interface OnlineProps {
  online: boolean;
}
const InputWrapper = styled.div<OnlineProps>`
  flex: 1;
  background-color: ${props => props.online ? props.theme.colors.white : props.theme.colors.paleGrey};
  border-radius: 8pt;
  height: 32pt;
  box-shadow: 0 2pt 4pt 0 ${props => props.theme.colors.black30};
  display: flex;
  align-items: center;
  padding: 0 8pt;
`

const Input = styled.input<OnlineProps>`
  border: 0;
  width: 100%;
  height: 100%;
  border-radius: 8pt;
  background-color: ${props => props.online ? props.theme.colors.white : props.theme.colors.paleGrey};
  &:focus {
    outline: none;
  }
`

const SearchIconWrapper = styled.div`
  margin-right: 2pt;
`
export const ProductListing: React.FunctionComponent = () => {
  const online = useIsOnline()
  const dispatch = useNavigationDispatch()
  const [query, setQuery] = useState<ProductSearchParams>({
    _page: 1,
    q: '',
  })
  const reachedEnd = useRef(false)

  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [displayedProducts, setDisplayedProducts] = useState<Array<Product>>([])
  const loadData = useCallback(async () => {
    setIsFetching(true)
    const { result, extra } = await search(query)
    setDisplayedProducts(query._page === 1 ? result.products : displayedProducts.concat(result.products))
    const lastPage = Math.ceil(extra.totalItems / extra.pageSize)
    reachedEnd.current = (lastPage === query._page || result.products.length === 0)
    setIsFetching(false)
  }, [query])

  const updateKeyword = useCallback(debounce((keyword: string) => {
    setQuery(prevState => {
      return {
        _page: prevState.q !== keyword ? 1 : prevState._page,
        q: keyword,
      }
    })
  }, 500), [])

  const onLoadMore = useCallback(() => {
    if (!reachedEnd.current) {
      setQuery(prevState => ({
        ...prevState,
        _page: prevState._page + 1,
      }))
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData, query])

  return (
    <>
      <NavigationBar>
        <InputWrapper online={online}>
          <SearchIconWrapper>
            <img src="/static/images/Search.png" srcSet="/static/images/Search@2x.png 2x, /static/images/Search@3x.png 3x" />
          </SearchIconWrapper>
          <Input
            online={online}
            disabled={!online}
            placeholder={online ? 'Nhập tên, mã sản phẩm': 'Không có kết nối internet'}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              updateKeyword(e.target.value)
            }}
          />
        </InputWrapper>
      </NavigationBar>
      <ScrollContainer
        isFetching={isFetching}
        onLoadMore={onLoadMore}
      >
        {displayedProducts.map(product => (
          <ProductRow
            key={product.sku}
            onClick={
              (): void => dispatch({
                type: 'PUSH',
                payload: {
                  name: 'PRODUCT_DETAIL',
                  payload: {
                    sku: product.sku,
                  }
                }
              })}
            product={product}
          />
        ))}
      </ScrollContainer>
    </>
  )
}


export default ProductListing
