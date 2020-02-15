import styled from 'styled-components';

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #191920;
`;

export const Container = styled.ScrollView``;

export const ProductContainer = styled.View`
  margin-top: 30px;
  background-color: #fff;
  width: 350px;
  height: 450px;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
`;

export const TitleContainer = styled.View`
  width: 320;
  justify-content: center;
  align-items: center;
`;

export const ProductTitle = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 28px;
`;

export const ProductButton = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  background-color: #3394ff;
  width: 320px;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 4px;
  flex-direction: row;
  padding-right: 100px;
`;

export const ProductButtonTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ProductButtonCounter = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 50px;
`;

export const ButtonCount = styled.Text`
  margin-left: 5px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 15px;
`;
