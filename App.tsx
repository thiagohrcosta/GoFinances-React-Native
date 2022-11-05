import React from 'react';
import 'intl';
import'intl/locale-data/jsonp/pt-BR';

import {StatusBar} from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';
import { AuthProvider, useAuth } from './src/hooks/AuthContext';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth()

  if(!fontsLoaded || userStorageLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content"/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  );
}
