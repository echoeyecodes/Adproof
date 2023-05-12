import { StyleProp, StyleSheet, TouchableNativeFeedback, View, ViewStyle } from "react-native"

type IconButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    containerStyle?: StyleProp<ViewStyle>
}

export const IconButton = (props: IconButtonProps) => {

    return <TouchableNativeFeedback onPress={props.onClick}>
        <View style={[styles.container, props.containerStyle]}>
            {props.children}
        </View>
    </TouchableNativeFeedback>
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})