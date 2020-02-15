import styled from 'styled-components';

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #191920;
`;

export const Container = styled.ScrollView``;

export const CartContainer = styled.View`
  margin-top: 30px;
  background-color: #fff;
  width: 360px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const CartItem = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CartItemData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 330px;
`;

export const CartItemOptions = styled.View`
  background-color: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 330px;
  border-radius: 4px;
`;

export const ItemTitle = styled.Text`
  font-size: 17px;
  color: #333;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ItemPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`;

export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;
export const ItemCounterBox = styled.View`
  width: 51px;
  height: 26px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 0.5px solid #979797;
  border-radius: 4px;
  margin: 0 7px;
`;

export const Counter = styled.Text``;

export const TextInfoContainer = styled.View`
  width: 57%;
`;

export const QuantitySelector = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const FinalPriceContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

export const Total = styled.Text`
  color: #909090;
  font-weight: bold;
  font-size: 27px;
`;

export const TotalPrice = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: #3394ff;
  width: 330px;
  height: 50px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const CartButton = styled.TouchableOpacity``;
