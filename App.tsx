import React from 'react';
import {SafeAreaView, StatusBar, Text, View, NativeModules} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  align-items: center;
`;

const App = () => {
  const {env} = NativeModules.RNConfig;
  console.log('env:');
  console.log(env);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Wrapper>
        <Text style={{fontSize: 24}}>Uygulama:</Text>
        <Text style={{fontSize: 24}}>{env}</Text>
        <Text style={{fontSize: 24}}>ortamında çalışmaktadır.</Text>
      </Wrapper>
    </SafeAreaView>
  );
};

export default App;
