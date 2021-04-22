import React from 'react';
import { View, Switch, Button } from 'react-native';
import styled from 'styled-components/native';

import { Fonts, Images, Metrics } from 'Constants';
import { McText, McImage, PlayButton } from 'Components';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Profile');
        }}
        title="Go to Profile"
      ></Button>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;
const Text = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text};
`;
export default Home;
