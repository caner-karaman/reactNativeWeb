import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native';
import styled from "styled-components";

const Wrapper = styled(View)`
  background-color: red;
  align-items: center;
`

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <Wrapper>
        <Text style={{fontSize: 24}}>React Native Web App Example</Text>
      </Wrapper>
    </SafeAreaView>
  );
};

export default App;
