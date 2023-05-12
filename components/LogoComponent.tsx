import { Image, StyleSheet, View } from "react-native"

type LogoComponentProps = {
  
}

export const LogoComponent = (props: LogoComponentProps) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  }
})