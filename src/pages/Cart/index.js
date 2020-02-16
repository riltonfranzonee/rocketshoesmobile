import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Body,
  Container,
  CartContainer,
  CartItem,
  CartItemData,
  CartItemOptions,
  ItemTitle,
  ItemCounterBox,
  ItemPrice,
  ItemImage,
  Counter,
  TextInfoContainer,
  QuantitySelector,
  Subtotal,
  Total,
  TotalPrice,
  CheckoutButton,
  ButtonTitle,
  FinalPriceContainer,
  CartButton,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({
  navigation,
  cart,
  total,
  removeFromCart,
  updateAmountRequest,
}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <>
      {!navigation.isHome ? (
        <Body>
          <Container showsVerticalScrollIndicator={false}>
            {total === '$0.00' ? (
              <EmptyContainer>
                <Icon name="remove-shopping-cart" color="#3394ff" size={100} />
                <EmptyText>Cart is Empty</EmptyText>
              </EmptyContainer>
            ) : (
              <CartContainer>
                {cart.map(product => (
                  <CartItem key={product.id}>
                    <CartItemData>
                      <ItemImage
                        source={{
                          uri: product.image,
                        }}
                      />
                      <TextInfoContainer>
                        <ItemTitle>{product.title}</ItemTitle>
                        <ItemPrice>{product.priceFormatted}</ItemPrice>
                      </TextInfoContainer>
                      <CartButton onPress={() => removeFromCart(product.id)}>
                        <Icon name="delete-forever" size={30} color="#3394ff" />
                      </CartButton>
                    </CartItemData>
                    <CartItemOptions>
                      <QuantitySelector>
                        <CartButton onPress={() => decrement(product)}>
                          <Icon
                            name="remove-circle-outline"
                            size={25}
                            color="#3394ff"
                          />
                        </CartButton>
                        <ItemCounterBox>
                          <Counter>{product.amount}</Counter>
                        </ItemCounterBox>
                        <CartButton onPress={() => increment(product)}>
                          <Icon
                            name="add-circle-outline"
                            size={25}
                            color="#3394ff"
                          />
                        </CartButton>
                      </QuantitySelector>
                      <Subtotal>{product.subtotal}</Subtotal>
                    </CartItemOptions>
                  </CartItem>
                ))}
                <FinalPriceContainer>
                  <Total>TOTAL</Total>
                  <TotalPrice>{total}</TotalPrice>
                </FinalPriceContainer>
                <CheckoutButton>
                  <ButtonTitle>CHECKOUT</ButtonTitle>
                </CheckoutButton>
              </CartContainer>
            )}
          </Container>
        </Body>
      ) : null}
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
