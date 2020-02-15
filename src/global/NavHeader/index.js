import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as NavActions from '../../store/modules/navigation/actions';

import logo from '../../../assets/logo.png';

import {
  Header,
  LogoImage,
  HomeNav,
  CartNav,
  Counter,
  CounterText,
} from './styles';

function NavHeader({ cart, toggleHome, toggleCart }) {
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <Header screenWidth={screenWidth}>
      <HomeNav onPress={() => toggleHome()}>
        <LogoImage source={logo} />
      </HomeNav>
      <CartNav onPress={() => toggleCart()}>
        <Icon name="shopping-basket" color="#fff" size={28} />
        <Counter>
          <CounterText>{cart.length}</CounterText>
        </Counter>
      </CartNav>
    </Header>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch => bindActionCreators(NavActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
