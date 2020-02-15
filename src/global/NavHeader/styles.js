import styled from 'styled-components';

export const Header = styled.View`
  height: 100px;
  background-color: #141419;
  width: ${props => props.screenWidth};
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const LogoImage = styled.Image`
  width: 200px;
  height: 24px;
`;

export const HomeNav = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const CartNav = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const Counter = styled.View`
  width: 20px;
  height: 20px;
  background-color: #3394ff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 20px;
  position: absolute;
`;

export const CounterText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
