/*
TODO : Remove once handover is done
Guideline Document
https://docs.google.com/document/d/1PFmtpZ_gmusxEhvGygT2_0lCMIzkhV7CVwoZUjiCHVM/edit?usp=sharing
*/
import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SplashScreen} from './src/modules/splash/src/screen/Index';
import LoginScreen from './src/modules/exampleLogin/src/screen/LoginScreen';
import {View} from 'react-native';

const App = () => {
  const [MainScreen, setMainScreen] = useState('SplashScreen');
  const queryClient = new QueryClient();
  const switchScreen = () => {
    setMainScreen('LoginScreen');
  };
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        {MainScreen === 'SplashScreen' ? (
          <SplashScreen switchScreen={switchScreen} />
        ) : (
          <LoginScreen />
        )}
      </View>
    </QueryClientProvider>
  );
};

export default App;
