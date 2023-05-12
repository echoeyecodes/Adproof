import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RootNavigation } from './components/navigation';
import { StatusBar } from './components/StatusBar';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import ThemeContext, { ThemeMode } from './context/ThemeContext';
import { useColorScheme, useThemeColor } from './utils/colors';
import RNBootSplash from "react-native-bootsplash";

function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DEFAULT)
  const isDarkMode = useColorScheme() == ThemeMode.DARK
  const backgroundColor = useThemeColor().background

  function toggleTheme(mode: ThemeMode) {
    setTheme(mode)
  }

  async function hideSplashScreen() {
    await RNBootSplash.hide({ fade: true });
  }

  useEffect(() => {
    hideSplashScreen()
  }, [])

  function handleNavigationBarColor() {
    changeNavigationBarColor(backgroundColor, false, true);
  }

  useEffect(() => {
    handleNavigationBarColor();
  }, [backgroundColor]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
        <StatusBar />
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor }]}>
          <View style={styles.container}>
            <View style={styles.content}>
              <RootNavigation />
            </View>
          </View>
        </SafeAreaView>
      </ThemeContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1
  }
})

export default App;
