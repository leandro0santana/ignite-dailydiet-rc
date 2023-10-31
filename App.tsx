import { StatusBar } from 'react-native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components/native'

import { Routes } from './src/routes'
import theme from './src/theme'

import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
