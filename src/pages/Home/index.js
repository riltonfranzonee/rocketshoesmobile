import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { navigation, addToCart, amount } = this.props;
    const { products } = this.state;

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
                  <ProductButton onPress={() => addToCart(product)}>
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
}

const mapStateToProps = state => ({
  navigation: state.navigation,
  cart: state.cart,
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
