import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function NavHeader() {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <Header screenWidth={screenWidth}>
      <HomeNav onPress={() => dispatch(NavActions.toggleHome())}>
        <LogoImage source={logo} />
      </HomeNav>
      <CartNav onPress={() => dispatch(NavActions.toggleCart())}>
        <Icon name="shopping-basket" color="#fff" size={28} />
        <Counter>
          <CounterText>{cart.length}</CounterText>
        </Counter>
      </CartNav>
    </Header>
  );
}
