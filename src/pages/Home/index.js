import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import * as NavActions from '../../store/modules/navigation/actions';

import api from '../../services/api';

import {
  Body,
  Container,
  ProductContainer,
  ProductTitle,
  ProductPrice,
  ProductImage,
  ProductButton,
  ProductButtonTitle,
  ProductButtonCounter,
  ButtonCount,
  TitleContainer,
} from './styles';

import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadData();
  }, []);

  const navigation = useSelector(state => state.navigation);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAdd(id) {
    dispatch(CartActions.addToCartRequest(id));
    dispatch(NavActions.toggleCart());
  }

  return (
    <>
      {navigation.isHome ? (
        <Body>
          <Container showsVerticalScrollIndicator={false}>
            {products.map(product => (
              <ProductContainer key={product.id}>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <TitleContainer>
                  <ProductTitle>{product.title}</ProductTitle>
                </TitleContainer>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
                <ProductButton onPress={() => handleAdd(product.id)}>
                  <ProductButtonCounter>
                    <Icon name="add-shopping-cart" color="#fff" size={22} />
                    <ButtonCount>{amount[product.id] || 0}</ButtonCount>
                  </ProductButtonCounter>
                  <ProductButtonTitle>ADD TO CART</ProductButtonTitle>
                </ProductButton>
              </ProductContainer>
            ))}
          </Container>
        </Body>
      ) : null}
    </>
  );
}
