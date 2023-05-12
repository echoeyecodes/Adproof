import { StyleSheet, View, ViewStyle } from "react-native"

type DividerProps = {
    containerStyles?: ViewStyle
}

export const Divider = (props: DividerProps) => {

    return <View style={[styles.container, props.containerStyles]} />
}

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
})